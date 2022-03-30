<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  
  <footer class="text-white text-center text-lg-start bg-primary">
      <div class="container p-4">
        <div class="row mt-4">
          <div class="col1">

            <h5 class="text-uppercase mb-4">About the Website</h5>
            <p>
              Price Scanner is a web app designed to allow users to see the past
              and present prices of their favourite Amazon products.
              It was created as a shopping companion tool to help
              consumers get the products they want at the lowest possible
              price.
            </p>
            <p>
              Here is a quick how-to navigate through our app: <br>You can use
              the search bar to enter the URL of the product you wish to see the
              price trends of. You will then see the graph representing the current,
              maximum, minimum and average prices of your favourite products.
              This will help you in making an informed decision as to when
              to purchase your all-time amazon favourites.
            </p>

          </div>

          <div class="col2">

            <h5 class="text-uppercase mb-4"> Get in touch! Here's how to contact us :)</h5>
            <p>
              If you have any questions, please feel free to contact us. <br> 
              We will get back to you as soon as we can.
            </p>
            <div class="mt-4">
              <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
              <a href="https://www.twitter.com/" class="fa fa-twitter"></a>
              <a href="https://www.google.com/" class="fa fa-google"></a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="fa fa-youtube"></a>
            </div>

          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center p-3">
        © 2022 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/">nuigalway.ie</a>
      </div>
  </footer>
</template>


<script>
export default {
  name: "Header",
};
</script>


<style>
@import "~bootstrap/dist/css/bootstrap.css";

h5 {
  color: gold;
}

.col1 {
  width: 65%;
  font-size: 14px;
  padding-right: 50px;
}

.col2 {
  width: 35%;
  font-size: 14px;
}

.fa {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
  margin: 10px;
  
}
.fa:hover {
  opacity: 0.7;
}
.fa-facebook {
  background: #3B5998;
  color: white;
}
.fa-twitter {
  background: #55ACEE;
  color: white;
}
.fa-google {
  background: #dd4b39;
  color: white;
}
.fa-youtube {
  background: #bb0000;
  color: white;
}

.text-center.p-3 {
  color: gold;
  background-color: #0d57ca;
}
</style>