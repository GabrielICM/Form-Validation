const numero1 = 20;
const numero2 = "20";

console.log( numero1.toString() )

sumar = (a, b) => {
    console.log( a + b );
}

sumar(2, 3); // Este es un comentario

saludar = (nombre = ' ', apellido = '') =>  console.log( `Hola ${nombre} ${apellido}` ); 

saludar()

saludar('Gabriel', 'Carcamo')
