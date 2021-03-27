
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
            // productContainer.html(productContainer.html()+`
            // <div class="products"> 
            //     <i class="fas fa-window-close"></i>
            //     <img src="/assets/${item[0].tag}.jpg"/>
            //     <span>${item[0].name} </span>
            //     <div class="priceItem">${item[0].price} </div>  
            //     <div class="quantitydiv">
            //       <i class="fa fa-minus" aria-hidden="true"></i>
            //       <span> ${item[0].inCart} </span>
            //       <i class="fa fa-plus" aria-hidden="true"></i>

            //       <span class="totalItems"> ${item[0].price * item[0].inCart} </span>
            //     </div>
                 
            // </div>
            

            // `)  

            productContainer.html(productContainer.html()+ `
               <div class="products"> 
               <i class="fas fa-window-close"></i>
               <img src="/assets/${item[0].tag}.jpg"/>
               <span>${item[0].name} </span>
               <div class="priceItem">GH₵ <span>${item[0].price}</span></div>  
               <div class="quantitydiv">
                    <i class="fa fa-minus" aria-hidden="true"></i>
                   <span>${item[0].inCart}</span>
                    <i class="fa fa-plus" aria-hidden="true"></i>
               </div>
               <span class="totalItems">GH₵ ${item[0].price * item[0].inCart} </span>
                 
                   
               
               </div>
            
            `)
        });
          

    }
}

displayCart();


$(".fa-plus").click(increaseQuantity);
 $(".fa-minus").click(reduceQuantity);

function increaseQuantity(){
    let currentDiv = $(this).parent().addClass("current");
 
        if($(this).parent().hasClass("current")){
            qValue=  $(".current span").text();
            qValue = parseInt(qValue) + 1;
            $(".current span").text(qValue);
            console.log("it has");
          
        }

             
            
        $(this).parent().removeClass("current");
}



function reduceQuantity(){
         let currentDiv = $(this).parent().addClass("current");
         qValue=  $(".current span").text();
   
            if($(this).parent().hasClass("current") && parseInt(qValue) > 1){
                qValue=  $(".current span").text();
                qValue = parseInt(qValue) - 1;
                $(".current span").text(qValue);
                
              
            }
    
                 
                
            $(this).parent().removeClass("current");
}