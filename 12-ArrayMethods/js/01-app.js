const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
/*

// Comprobar si en valor existe en un arreglo

meses.forEach( mes => {
    if(mes === 'Enero'){
        console.log('Si existe');
    }
});

const resultado = meses.includes('enero');

console.log(resultado);

//En un arreglo de objetos se utiliza .some

const existe = carrito.some( producto => producto.nombre === 'Celular');
console.log(existe);

//en un arreglo tradicional con .some

const existe2 = meses.some(mes => mes === 'febrero')
console.log(existe2);

const resultado = carrito.reduce((total, producto) => total + producto.precio,0);
console.log(resultado);

*/

// 

const meses2 = ['diciembre'];
const meses3 = ['noviembre'];

const resultado = meses.concat(meses2,meses3)

console.log(resultado);