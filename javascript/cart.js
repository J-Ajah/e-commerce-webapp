
// Display cart function starts here
function displayCart()  {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
     let productContainer =  $("#products");
    
    console.log(cartItems)
    
    console.log(productContainer.html())
    if(cartItems && productContainer){
        
       productContainer.innerHTML = ''; 
       productContainer.addClass("disable-select") 
        Object.values(cartItems).map(item => {
            console.log(item[0].tag);
            productContainer.html(productContainer.html()+ `
               <div class="products"> 
               <i class="fas fa-window-close"></i>
               <img src="assets/${item[0].tag}.jpg"/>
               <span>${item[0].name} </span>
               <div class="priceItem">GH₵ <span>${item[0].price}</span></div>  
               <div class="quantitydiv">
                    <i class="fa fa-minus" aria-hidden="true"></i>
                   <span>${item[0].inCart}</span>
                    <i class="fa fa-plus" aria-hidden="true"></i>
               </div>
               <span class="totalItems">GH₵ <span class="itemValue"> ${item[0].price * item[0].inCart} </span> </span>
                 
                   
               
               </div>
            
            `)
        });
          

    }
}

displayCart();


$(".fa-plus").click(increaseQuantity);
 $(".fa-minus").click(reduceQuantity);

function increaseQuantity(){
     $(this).parent().addClass("current");
 
        if($(this).parent().hasClass("current")){
            qValue=  $(".current span").text();
            qValue = parseInt(qValue) + 1;
            $(".current span").text(qValue);
          
        }


        //Increment total price of item when quantity is incremented
         let price=$(".current").parent().children(".priceItem").find("span").text();
         let quantity = $(".current").parent().children(".quantitydiv").find("span").text();
         total = parseFloat(price) * parseFloat(quantity)
         // set total value
          $(".current").parent().children(".totalItems").find(".itemValue").text(total);

        //Value increment script ends here
            
         $(this).parent().removeClass("current");
}



function reduceQuantity(){
          $(this).parent().addClass("current");
          qValue=  $(".current span").text();
   
            if($(this).parent().hasClass("current") && parseInt(qValue) > 1){
                qValue=  $(".current span").text();
                qValue = parseInt(qValue) - 1;
                $(".current span").text(qValue);  
            }

         //Increment total price of item when quantity is incremented
         let total = $(".current").parent().children(".totalItems").find(".itemValue").text();
         let price = $(".current").parent().children(".priceItem").find("span").text();
    
         total = parseFloat(total) - parseFloat(price);
         // set total value
          $(".current").parent().children(".totalItems").find(".itemValue").text(total);

        //Value increment script ends here
       
            $(this).parent().removeClass("current");

             //update total items in the order summary
            upadateTotalItems()

}


function upadateTotalItems(){

           itemsLength = $(".products").length;
           console.log(itemsLength);
           console.log($(".products"));

           for(i = 0; i < itemsLength; i++){
            let total = $(".products")[i].children(".quantitydiv").find("span").text();
              console.log(total)
           }
            

}