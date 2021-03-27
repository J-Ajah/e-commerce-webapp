
// function to add item number when the add is clicked

function add(){
    let val =  $("#num").val();
    val =  (val == "") ? 1 : parseInt(val) + 1 ;
    if(val > 10){
        return;
    }

    $("#num").val(val);
}


function deduct(){
    let val = $("#num").val();
    if(val >0){
    val = (val == "") ? 1 : parseInt(val) - 1;
    $("#num").val(val);
    }
}



$(".sizes").click(function(e){
    $(".sizes").css("background-color","")
    $(this).css("background-color","lightblue")
    $(this).css("color","black")

})




// Show cart functionality starts here starts here
function showCart(){
    // let result;
    if($(".Add-to-Cart").hasClass("cartHide")){

        $(".Add-to-Cart").removeClass("cartHide");
        $(".Add-to-Cart").addClass("showCart");

    }else if($(".Add-to-Cart").hasClass("showCart")){

        $(".Add-to-Cart").removeClass("showCart");
        $(".Add-to-Cart").addClass("cartHide");

    }

    //parsing display items
      let name = $("#text h2").text();
      let price = $(".delivery-div h2 #price").text();
      let val = $("#num").val();
      let total = parseInt(price) * parseInt(val);
    $(".Add-to-cart .productInfoContainer .productInfo .name").text(name);
    $(".Add-to-cart .productInfoContainer .productInfo .productPrice .p-price").text(price);
    $(".Add-to-cart .productInfoContainer .productInfo #q #qvalue").text(val);
    $(".Add-to-cart .productInfoContainer .productInfo #total span").text(total.toString())
    $(".productInfo img").attr("src",$(".container-items .slideshow-container .mySlides .img1").attr("src"));


   

   
}


// This function is used to get the product details and store it in a 
//local storage

//Initializing an empty object
let products = [{ }];
let pos = 0;

function getProducts(){
     productImage =   $(".container-items .slideshow-container .mySlides .img1").attr("src");
    

    //Checks if the selected product is the first product, second or last product
    if(String(productImage) === String("/assets/BigProductImage.jpg") ||
     String(productImage) === String("/assets/bigImage2.jpg") || 
     String(productImage) === String("/assets/bigImage3.jpg")){


        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        // console.log(cartItems);
         
        
        if(cartItems != null){
            
            let count = cartItems['BigProductImage'][0].inCart;
            count = count + 1;
           //Also if product is undefined
            if(cartItems[products.tag] == undefined){
                
                var obj = {
                    name : $("#text h2").text(),
                    price : $(".delivery-div h2 #price").text(),
                    tag : "BigProductImage",
                    inCart : 1
                }
                
                
                // obj = JSON.stringify(obj);
                cartItems = {
                    ...cartItems,
                    [obj.tag]:[
                        {
                            name : obj.name,
                            price : obj.price,
                            tag : obj.tag,
                            inCart: count
                        }
                    ]
                    // [products[pos].tag]:products
                }
                
                localStorage.setItem("productsInCart",JSON.stringify(cartItems));
                
            }
 
            
            //Update cart items
             
          
            
           // cartItems["shoe"][0].inCart += 1;
            
           
            
            cartItems['BigProductImage'][0].inCart = count;
            localStorage.setItem("productsInCart",JSON.stringify(cartItems));
        }else{
            //first time
            products[pos].name =  $("#text h2").text();
            products[pos].price = $(".delivery-div h2 #price").text();
            products[pos].tag = "BigProductImage";
            products[pos].inCart = 1;
            
 
            cartItems = {
                ...cartItems,
            [products[pos].tag]:products
            }

        }

        

        

         localStorage.setItem("productsInCart",JSON.stringify(cartItems));
        

     }else if(String(productImage) === String("/assets/suits.jpg")){

        // products.name =  $("#text h2").text();
        // products.price = $(".delivery-div h2 #price").text();
        // products.inCart = 1;

        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        // console.log(cartItems);
         
        
        if(cartItems != null){
            
            let count = cartItems['shoe'][0].inCart;
            count = count + 1;
           //Also if product is undefined
            if(cartItems[products.tag] == undefined){
                
                var obj = {
                    name : $("#text h2").text(),
                    price : $(".delivery-div h2 #price").text(),
                    tag : "suits",
                    inCart : 1
                }
                
                
                // obj = JSON.stringify(obj);
                cartItems = {
                    ...cartItems,
                    [obj.tag]:[
                        {
                            name : obj.name,
                            price : obj.price,
                            tag : obj.tag,
                            inCart: count
                        }
                    ]
                    // [products[pos].tag]:products
                }
                
                localStorage.setItem("productsInCart",JSON.stringify(cartItems));
                
            }
 
            
            //Update cart items
             
          
            
           // cartItems["shoe"][0].inCart += 1;
            
           
            
            cartItems['shoe'][0].inCart = count;
            localStorage.setItem("productsInCart",JSON.stringify(cartItems));
        }else{
            //set items if nothing is in the database
            products[pos].name =  $("#text h2").text();
            products[pos].price = $(".delivery-div h2 #price").text();
            products[pos].tag = "suits";
            products[pos].inCart = 1;
             
 
            cartItems = {
                ...cartItems,
            [products[pos].tag]:products
            }

        }
        // localStorage.setItem("productsInCart",JSON.stringify(cartItems));
        
         
     }else if(String(productImage) === String("/assets/shoe.jpg")){

        // products.name =  $("#text h2").text();
        // products.price = $(".delivery-div h2 #price").text();
        // products.inCart = 1;
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        
         
        //if cart item is null
        if(cartItems != null && typeof cartItems['shoe'] != 'undefined'){
            
            let count = cartItems['shoe'][0].inCart;
            count = count + 1;
           //Also if product is undefined
            if(cartItems[products.tag] == undefined){
                
                var obj = {
                    name : $("#text h2").text(),
                    price : $(".delivery-div h2 #price").text(),
                    tag : "shoe",
                    inCart : 1
                }
                
                
                // obj = JSON.stringify(obj);
                cartItems = {
                    ...cartItems,
                    [obj.tag]:[
                        {
                            name : obj.name,
                            price : obj.price,
                            tag : obj.tag,
                            inCart: count
                        }
                    ]
                    // [products[pos].tag]:products
                }
                
                localStorage.setItem("productsInCart",JSON.stringify(cartItems));
                
            }
 
            
            //Update cart items
             
          
            
           // cartItems["shoe"][0].inCart += 1;
            
           
            
            cartItems['shoe'][0].inCart = count;
            localStorage.setItem("productsInCart",JSON.stringify(cartItems));
        }else{
            
            //set items if nothing is in the database
            products[pos].name =  $("#text h2").text();
            products[pos].price = $(".delivery-div h2 #price").text();
            products[pos].tag = "shoe";
            products[pos].inCart = 1;
            
 
            cartItems = {
                ...cartItems,
            [products[pos].tag]:products
            }
            // localStorage.setItem("productsInCart",JSON.stringify(cartItems));
        }
        
        
        localStorage.setItem("productsInCart",JSON.stringify(cartItems));
     }
     
}


// declaring product objects
     


// Listens to the event click of add tag button
  $(".btn-div  #cart").click( addCartNumbers);


     // adds cart number
function addCartNumbers(){
    let productNumbers = localStorage.getItem('CartNumbers');
    productNumbers = parseInt(productNumbers);

     if(productNumbers){
        localStorage.setItem("CartNumbers", productNumbers + 1);
        $(".productInfo #CheckoutLink i span").text(productNumbers + 1);
     }else{
        localStorage.setItem("CartNumbers", 1);
        $(".productInfo #CheckoutLink i span").text(1);
     }
     getProducts();
}




//stores previously clicked images properties
let previous;
// showImage function
function changeImage(event){
      let imageSrc  = $(event).attr("src");
      let currentDiv;
      
      if(String(imageSrc) === String("/assets/smallPImage.jpg")){
           

        $(".mySlides .img1").attr("src","/assets/BigProductImage.jpg");

        $(".mySlides  .img2").attr("src","/assets/bigImage2.jpg")
        $(".mySlides  .img3").attr("src","/assets/bigImage3.jpg")

            currentDiv =   $(event).parent().addClass("borderAdd");



           if(typeof previous == 'undefined'){
              previous = currentDiv;
           }else{
            previous.removeClass("borderAdd");
            previous = currentDiv;
           }
           
      }else if(String(imageSrc) === String("/assets/shoe.jpg")){

            $(".mySlides .bigProductImg").attr("src","/assets/shoe.jpg");
           
             currentDiv =$(event).parent().addClass("borderAdd");
        
             



             if(typeof previous == 'undefined'){
                previous = currentDiv;
             }else{
              previous.removeClass("borderAdd");
              previous = currentDiv;
             }
             

      }else if(String(imageSrc) === String("/assets/suits.jpg")){
        $(".mySlides .bigProductImg").attr("src","/assets/suits.jpg");
        
        currentDiv =   $(event).parent().addClass("borderAdd");

        if(typeof previous == 'undefined'){
            previous = currentDiv;
         }else{
          previous.removeClass("borderAdd");
          previous = currentDiv;
         }
         
      }

    
      changeDetails(event);
   
}

//function to change product details starts here
function changeDetails(event){
    imageSrc = $(event).attr("src");

    if(String(imageSrc) === String("/assets/shoe.jpg")){
        //name of product
        $("#text h2").text("Uk made Shoes");
        //price on dicount
        $(".delivery-div h2 #price").text(180.00);
        //previous  price
        $(".delivery-div h2 #oldprice").text(280.99);
       
    }
    else if(String(imageSrc) === String("/assets/suits.jpg")){
        
         //name of product
         $("#text h2").text("Corporate Office Suits");
         //price on dicount
         $(".delivery-div h2 #price").text(580.00);
         //previous  price
         $(".delivery-div h2 #oldprice").text(780.99);

    }else if(String(imageSrc) === String("/assets/smallPImage.jpg")){
        //name of product
        $("#text h2").text("Boy's Cardigan with Zip");
          
        //price on dicount
        $(".delivery-div h2 #price").text(120.00);
        //previous  price
        $(".delivery-div h2 #oldprice").text(200.99);

    }

    
    //Checks if the window has showCart and removes it
    if($(".Add-to-Cart").hasClass("showCart")){

        $(".Add-to-Cart").removeClass("showCart");
        $(".Add-to-Cart").addClass("cartHide");

    }
    
}








//Image slides added here

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

slides[slideIndex-1].style.display = "block"; 

changeImage();
  

}




