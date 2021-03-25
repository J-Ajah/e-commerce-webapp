
// Display cart function starts here
function displayCart()  {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
     let productContainer =  $("#products");
    
    console.log(cartItems)
    
    console.log(productContainer.html())
    if(cartItems && productContainer){
        
       productContainer.innerHTML = '';  
        Object.values(cartItems).map(item => {
            console.log(item[0].tag);
            productContainer.html(productContainer.html()+`
            <div class="products"> 
                <i class="fas fa-window-close"></i>
                <img src="/assets/${item[0].tag}.jpg"/>
                <span>${item[0].name} </span>
                <div class="priceItem">${item[0].price} </div>  
                <div class="quantitydiv">
                  <i class="fa fa-minus" aria-hidden="true"></i>
                  <span> ${item[0].inCart} </span>
                  <i class="fa fa-plus" aria-hidden="true"></i>

                  <span class="totalItems"> ${item[0].price * item[0].inCart} </span>
                </div>
                 
            </div>
            

            `)  
        });


    }
}

displayCart();