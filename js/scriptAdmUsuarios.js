const btnNuevo = document.querySelector('#btnNuevo');
const btnAceptar = document.querySelector('#btnAceptar');
const btnCancelar = document.querySelector('#btnCancelar');
const btnDesactivar = document.querySelector('#btnEstado');
const btnConfirmarDesactivar = document.querySelector('#btnConfirmarDesactivar');
const btnCancelarDesactivar = document.querySelector('#btnCancelarDesactivar');

const formModal =  document.querySelector('#formModal');
const desactivarModal = document.querySelector('#desactivarModal');


btnNuevo.addEventListener('click', (e) =>{
    e.preventDefault();
    formModal.style.display = 'flex';
});

btnAceptar.addEventListener('click', (e) =>{
    e.preventDefault();
    formModal.style.display = 'none';
});

btnCancelar.addEventListener('click', (e) =>{
    e.preventDefault();
    formModal.style.display = 'none';
});



btnDesactivar.addEventListener('click', (e) =>{
    e.preventDefault();
    desactivarModal.style.display = 'flex';
});

btnCancelarDesactivar.addEventListener('click', (e) =>{
    e.preventDefault();
    desactivarModal.style.display = 'none';
});


btnConfirmarDesactivar.addEventListener('click', (e) =>{
    e.preventDefault();
    desactivarModal.style.display = 'none';
});