const producto = 'monitor de 12';

//.replace para reemplazar
console.log(producto);
console.log(producto.replace(`12`,'"'));
console.log(producto.replace(`12`,'12 "'));

//.slice para cortar
console.log(producto.slice(0,-1))

//.subString

//chartAt
const nombre = 'Gabriel';
console.log(nombre.charAt(0))