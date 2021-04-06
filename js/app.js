
const enviarBtn = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        

eventsListeners();
function eventsListeners() {
    document.addEventListener('DOMContentLoaded',iniciarApp);

    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)
}

//funciones 

function iniciarApp() {
    enviarBtn.disabled = true;
    enviarBtn.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e) {
    
    ValidacionInputVacio(e);

    validarMail(e);
    
    validacionEnvio()
}

function ValidacionInputVacio(e){
    if(e.target.value.length > 0){
        const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    }
    else
    {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }
}

function validarMail(e){
    if(e.target.type === 'email'){
       
        if(er.test(e.target.value)){
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
        }
        else
        {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('El mail no es valido');
        }
    }
}
function validacionEnvio(){
    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
        enviarBtn.disabled = false;
        enviarBtn.classList.remove('cursor-not-allowed', 'opacity-50');
        console.log('asdasd')
}
}
function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500','background-color-100', 'p-3', 'mt-5','text-center', 'error');

    const errores = document.querySelectorAll('.error');
    
    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }
}