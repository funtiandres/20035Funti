alert("Lista de productos: 1. Geforce rtx 2060, 2. Gigabyte gt 1030, 3. Msi gtx 1050ti , 4. PnyRtx3070 , 5. terminar eleccion ");
let arrayChosenProducts = [];


while( 1 ) {
    let num1 = prompt ("Eliga el producto ingresando el numero");
    
    if ( num1 === "5" ) {
        const total = calculatePrice(arrayChosenProducts);
        alert("Total : " + total);
        break;
    }

    let price = 0;

    switch( num1 ) {
        case "1":
            price = 150000;
            break;
        case "2":
            price = 30000;
            break;
        case "3":
            price = 60000;
            break;
        case "4":
            price = 300000;
            break;
                            
    }
    console.log(arrayChosenProducts)
    arrayChosenProducts.push(price);
       
}
   

function calculatePrice(array) {
    console.log(array)
    let total = 0;
    for (let i = 0 ; i < array.length; i++) {
        const element = array[i]; 
        total += element;
    }
    return total;
}