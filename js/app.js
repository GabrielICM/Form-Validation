const enviarBtn = document.querySelector('#enviar');
const resetBtn = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


eventsListeners();
function eventsListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    enviarBtn.addEventListener('click', envioEmail);
    resetBtn.addEventListener('click', resetearFormulario);
}

//funciones 

function iniciarApp() {
    enviarBtn.disabled = true;
    enviarBtn.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e) {

    ValidacionInputVacio(e);

    validarEmail(e);

    validacionEnvio();
}

function ValidacionInputVacio(input) {
    if (input.target.value.length > 0) {
        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }

        input.target.classList.remove('border', 'border-red-500');
        input.target.classList.add('border', 'border-green-500');
    }
    else {
        input.target.classList.remove('border', 'border-green-500');
        input.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }
}

function validarEmail(email) {
    if (email.target.type === 'email') {

        if (er.test(email.target.value)) {
            const error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }

            email.target.classList.remove('border', 'border-red-500');
            email.target.classList.add('border', 'border-green-500');
        }
        else {
            email.target.classList.remove('border', 'border-green-500');
            email.target.classList.add('border', 'border-red-500');
            mostrarError('El mail no es valido');
        }
    }
}

function validacionEnvio() {
    if (er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
        enviarBtn.disabled = false;
        enviarBtn.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-color-100', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');

    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
}

function envioEmail(e) {
    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout(() => {
        spinner.style.display = 'none';

        const mensajeExito = document.createElement('p');
        mensajeExito.textContent = '¡Eviado con exito!';
        mensajeExito.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        formulario.insertBefore(mensajeExito, spinner);

        setTimeout(() => {
            mensajeExito.remove();
            resetearFormulario();
        }, 4000);
    }, 3000);
}

function resetearFormulario() {
    formulario.reset();
    iniciarApp();
}