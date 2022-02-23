

const products = [
    { id: 1, name: "Geforce rtx 2060", price: 150000 },
    { id: 2, name: "Gigabyte gt 1030" , price: 30000 },
    { id: 3, name: "Msi gtx 1050ti" , price: 60000  },
    { id: 4, name: "PnyRtx3070" , price: 300000}
]



   

let shoppingCart = [];




let Geforce = document.getElementById("add1"); 
let Gigabyte = document.getElementById("add2"); 
let Msi = document.getElementById("add3"); 
let Pny = document.getElementById("add4"); 

let finishBuy = document.getElementById("buy")


Geforce.onclick = () => 
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Añadido al carrito',
        showConfirmButton: false,
        timer: 800
      }).then (addToCart(products[0]));

      Gigabyte.onclick = () => 
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Añadido al carrito',
        showConfirmButton: false,
        timer: 800
      }).then (addToCart(products[1]));

      Msi.onclick = () => 
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Añadido al carrito',
        showConfirmButton: false,
        timer: 800
      }).then (addToCart(products[2]));

      Pny.onclick = () => 
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Añadido al carrito',
        showConfirmButton: false,
        timer: 800
      }).then (addToCart(products[3]));




finishBuy.onclick = () => calculatePrice();



function addToCart(product) {
     
    
    shoppingCart.push (product);
   
}
   

function calculatePrice() {

   let total = shoppingCart.reduce ((acc,el) => {return  acc + el.price}  , 0);
   let newTotal = document.createElement("p");
   newTotal.innerHTML =  `<h2> El Total es : ${total} </h2> `
   document.body.appendChild(newTotal);

}

