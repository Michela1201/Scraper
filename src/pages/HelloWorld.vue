<template>
  <body>
    <form action="action_page.php" style="margin:auto;max-width:500px">
      <input type="text" v-model="address" placeholder="Type the URL of your product" name="search">
      <button type="button" @click="getWebsiteData">Search</button>
    </form>
    <br>

    <h1>{{title}}</h1>
    <h2>{{price}}</h2>
    <ul v-for="(item,index) in descr" :key="index">
      <li>{{descr[index]}}</li>
    </ul>
    <img v-bind:src="image">

    <!--<line-chart :data="[{name: 'Price', data: {'2017-01-01 00:00:00 -0800': 3, '2017-01-02 00:00:00 -0800': 4}}]" :colors="['#b00', '#666']" :curve="false" prefix="$" :round="2" :zeros="true"></line-chart>-->
    

  </body>
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
      priceHist: []
    }
  },
  methods: {
    getWebsiteData(){
      
      let self = this;
      let url = self.address;
      let title = '';
      let price = [];
      let descr = [];
      let image = '';

      axios({
        method: 'get',
        url: url
      })
      .then(function (response) {
        let html = response.data;

        let currDate = new Date();

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
        self.priceHist = ["55", "49", "67", "60"];
        self.date = ["3/4/5", "4/4/5", "5/4/5", "6/4/5"];
        self.address = '';

        if (self.title != "") {
          self.saveItem();
          
        }
        
console.log(self.priceHist);
console.log(self.date);

      });

    },
    saveItem(){
      const functions = getFunctions(app);
      const saveItem = httpsCallable(functions, 'saveItem');
      saveItem({"Title": this.title, "Price": this.price, "Description": this.descr}).then((result) => {
        console.log(result);
      });
    },






    
    
    getItems(){
      c
    },

    mounted(){
      this.getWebsiteData();
    }
  }
}



</script>
















<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* Style the search field */
form input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
  border-radius: 30px;
}

/* Style the submit button */
button {
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
}

form button {
  width: 20%;
}

button:hover {
  background: #0b7dda;
  border-left: none;
}

/* Clear floats */
::after {
  content: "";
  clear: both;
  display: table;
}

img {
  height: 200px;
}

body {
        margin: 0;
        padding: 0;
        width:100vw;
        height: 100vh;
        background-color: #eee;
    }
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height:100%;
    }
    .loader-wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #242f3f;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .loader {
        display: inline-block;
        width: 30px;
        height: 30px;
        position: relative;
        border: 4px solid #Fff;
        animation: loader 2s infinite ease;
    }
    .loader-inner {
        vertical-align: top;
        display: inline-block;
        width: 100%;
        background-color: #fff;
        animation: loader-inner 2s infinite ease-in;
    }

    @keyframes loader {
        0% { transform: rotate(0deg);}
        25% { transform: rotate(180deg);}
        50% { transform: rotate(180deg);}
        75% { transform: rotate(360deg);}
        100% { transform: rotate(360deg);}
    }

    @keyframes loader-inner {
        0% { height: 0%;}
        25% { height: 0%;}
        50% { height: 100%;}
        75% { height: 100%;}
        100% { height: 0%;}
    }

</style>











