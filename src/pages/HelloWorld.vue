<template>
  <div class="search">
    <form>
      <input type="text" v-model="address" placeholder="Type the URL of your product">
      <button type="button" @click="getWebsiteData">Search</button>
    </form>
  </div>

  <h1 style="font-size:45px; font-weight: lighter;">Start scanning to start saving!</h1>
  <div class="info">
    <h1 style="padding-bottom: 20px">{{title}}</h1>

    <div class="image">
      <img v-bind:src="image">
    </div>

    <div class="text">   
      <h2>{{price}}</h2>
      <ul v-for="(item,index) in descr" :key="index">
        <li>{{descr[index]}}</li>
      </ul>
    </div>
  </div>

  <div class="history">
      <div class="graph">
        <line-chart :data="priceHist" :colors="['#2196F3', '#666']" :curve="false" prefix="$" :round="2" :zeros="true"></line-chart>
      </div>
      <div class="stats">

        <table>
          <tr>
            <th></th>
            <th>Price</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>Current</td>
            <td>{{price}}</td>
            <td></td>
          </tr>
          <tr>
            <td>Maximum</td>
            <td>{{max}}</td>
            <td></td>
          </tr>
          <tr>
            <td>Minimum</td>
            <td>{{min}}</td>
            <td></td>
          </tr>
          <tr>
            <td>Average</td>
            <td></td>
            <td></td>
          </tr>
        </table>


      </div>
    </div>
  <br>
</template>


<script>
import app from '../api/firebase';
import { getFunctions, httpsCallable, connectFunctionsEmulator} from "firebase/functions";

const axios = require('axios')
const cheerio = require('cheerio')

export default {
  name: 'HelloWorld',
  data(){
    return {
      address:'https://www.amazon.co.uk/Samsung-AU8000-Crystal-Smart-built/dp/B08ZNMT5BY/?_encoding=UTF8&pd_rd_w=YxkTE&pf_rd_p=a71261a5-450a-406b-a560-7052648aeb75&pf_rd_r=J10DAKBFW0A6H4546E02&pd_rd_r=8a46789f-e961-4cf1-8ba6-dceffaad9232&pd_rd_wg=zlP03&ref_=pd_gw_ci_mcx_mr_hp_d&th=1&tag=coa_gb_g-21',
      title:'',
      price:'',
      descr:[],
      image:'',
      date: [],
      priceHist: {},
      min:'',
      max:'',
      items: []
    }
  },
  methods: {
    getWebsiteData(){
      let self = this;
      let address = self.address;
      let title = '';
      let price = [];
      let descr = [];
      let image = '';

      axios({
        method: 'get',
        url: address
      })
      .then(function (response) {
        let html = response.data;

        let $ = cheerio.load(html);
        
        $('div.a-container').each(function() {
          title = $(this).find('span.a-size-large.product-title-word-break').text();
          price = $(this).find('span.a-price.aok-align-center.reinventPricePriceToPayPadding.priceToPay > span.a-offscreen').text();
          image = $('#landingImage').attr('data-old-hires')
        });

        $('#feature-bullets>ul>li>span').each((i,el) => {
          descr.push($(el).text().replace(/[\n\t]/g, '').trim());
        })

        self.title = title;
        self.price = price;
        self.image = image;
        self.descr = descr;

        if (self.title != "") {
          self.saveItem();
        }

        
      });
    },

    saveItem(){
      let self = this;
      let newItem = 0;
      var i = 0;
      let returns = {}

      const functions = getFunctions(app);
      const saveItem = httpsCallable(functions, 'saveItem');
      saveItem({"Title": this.title, "Price": this.price, "Description": this.descr, "Address": this.address}).then((result) => {
        console.log(result);
      });

      
      //self.address = '';
      self.getItems();
    },





    getItems(){
      let self = this;
      let items = [];
      let date = [];

      //TODO
      const functions = getFunctions(app);
      const getItems = httpsCallable(functions, 'getItems');
      getItems().then((result) => {
        for (var i = 0; i < result.data.length; i++) {
          if (self.address === result.data[i].data.Address) {
            items.push(result.data[i].data.Price.toString().replace('£', ''));
            date.push(result.data[i].timestamp._seconds);
          }
        }
        for (var i = 0; i < date.length; i++){
          var t = new Date(date[i] *1000); // Epoch
          date[i] = t;
        }
        
        self.date = date;
        self.items = items;
        //items = Object.values(items);
        
        //console.log(items[0]);
        //console.log("type", typeof(items[0]));

        self.getGraph();
      });
      
    },

    getGraph(){
      let self = this;
      var prices = self.items;
      var dates = self.date;
      var data = {};

      console.log("date", self.date);
      console.log("items", self.items);

      for (var i = 0; i < dates.length && i < prices.length; i++) {
        data[dates[i]] = prices[i];
      }

      self.min = Math.min.apply(null, prices);
      self.max = Math.max.apply(null, prices);
      self.priceHist = data;
    },

    mounted(){
      this.getWebsiteData();
    }
  }
}

</script>


<style scoped>
.search {
  background-color: #2196F3;
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 10px;
}

form {
  float: center;
  font-size: 17px;
}
input {
  padding: 10px;
  width: 30%;
  border-radius: 30px;
  border: none;
}
button {
  margin-left: 1%;
  padding: 10px;
  width: 5%;
  border-radius: 30px;
  border: none;
  background: #2196F3;
  color: gold;
}
button:hover {
  background: #0b7dda;
  color: white;
}

.info {
  padding: 50px;
  padding-top: 20px;
}
h1 {
  font-size: 30px;
}

img {
  height: 200px;
}
.image {
  width: 40%;
  float: left;
}

.text {
  width: 60%;
  float: right;
}
h2 {
  font-size: 25px;
  text-align: right;
  padding-right: 100px;
  margin-top: 0;
}
ul {
  text-align: left;
  padding-top: 5px;
  margin: 0;
  list-style-type: none;
}

.history {
  padding: 50px;
}
.graph {
  width: 60%;
  float: left;
}
.stats {
  width: 40%;
  float: right;
  padding-right: 100px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>