/* const arra = [10,20,30,40,50];

console.log(arra);

console.log(arra[2])

const meses = ['enero','febrero','marzo','abril','mayo','junio'];

console.table(meses);
console.table(meses[2]);

console.log(meses.length);

arra.forEach(element => {
    console.log(element)
}); 

const meses = ['enero','febrero','marzo','abril','mayo','junio'];

meses.push('Julio');

console.table(meses);

let mesesBorrados = meses.splice(3,1);

console.table(meses);

console.table(mesesBorrados);

*/

const carrito = [];

const producto = {
    nombre:"TV led 42",
    precio: 370.000
}

const producto2 = {
    nombre:'celular',
    precio: 250.000
}

const producto3 = {
    nombre:'xbox x',
    precio: 319.000
}


carrito.push(producto,producto2,producto3);

console.table(carrito);

const carritoClon = carrito.map(p => {


});

console.table(carritoClon);
