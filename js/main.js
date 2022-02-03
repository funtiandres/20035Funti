const products = [
    { id: 1, name: "Geforce rtx 2060", price: 150000 },
    { id: 2, name: "Gigabyte gt 1030" , price: 30000 },
    { id: 3, name: "Msi gtx 1050ti" , price: 60000  },
    { id: 4, name: "PnyRtx3070" , price: 300000}
]


alert("Lista de productos: 1. Geforce rtx 2060, 2. Gigabyte gt 1030, 3. Msi gtx 1050ti , 4. PnyRtx3070 , 5. terminar eleccion ");
let shoppingCart = [];




while(  1 ) {

    let num = prompt ("Eliga el producto ingresando el numero");
    
    if ( num === "5" ) {
               
        calculatePrice()
        break;
    }

        

    if ( num === "1" ) {

        alert(" Agrego al carrito" + products[0].name );
        
    }   if ( num === "2" ) {

        alert(" Agrego al carrito" + products[1].name );
        
    } if ( num === "3" ) {

        alert(" Agrego al carrito" + products[2].name );
        
    } 
    if ( num === "4" ) {

        alert(" Agrego al carrito" + products[3].name );
        
    } 

    addToCart(num);

    
   
}


function addToCart(product) {

    let add = products.find ((el) => el.id === Number(product));
    shoppingCart.push (add);

}
   

function calculatePrice() {

    alert ("Cantidad de productos agregados " + shoppingCart.length );
    console.log (shoppingCart)
    let total = shoppingCart.reduce ((acc,el) => {return  acc + el.price}  , 0);
    alert (" El total de la compra es : $ " + total);

   
}