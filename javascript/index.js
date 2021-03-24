
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
    console.log(e)
    
    $(".sizes").css("background-color","")
    $(this).css("background-color","green")
    $(this).css("color","white")

})

// Zoom image code starts here

$('zoom').zoom();


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

   
}



// declaring product objects
     let products = [
         {
             name: "Cardigan",
             tag:"Boys Cardigan",
             price: 15,
             inCart :0
         }
     ]


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
    console.log(event)

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
  //dots[slideIndex-1].className += " active";
}