const carrito = [
    {nombre: 'TV 20', precio: 300000},
    {nombre: 'TV 40', precio: 300000},
    {nombre: 'TV 50', precio: 300000},
    {nombre: 'TV 65', precio: 300000}]

const persona = {
    nombre: '',

    set nuevoNombre(nombre) {
        this.nombre = nombre;
    },

    get obtenerNombre() {
        console.log(this.nombre)
    }
}

persona.nuevoNombre = 'gabriel';
persona.obtenerNombre;