function sumar(a=9,b=9) {
    return a+b;
}

const resultado = sumar();

console.log(resultado);

//-----------------

let total = 0;

function carritoTotal (precio) {
    return total += precio;
}

function totalImpuesto() {
    return total * 1.19;
}

total = carritoTotal(500);
total = carritoTotal(300);

console.log(total);
console.log(totalImpuesto())