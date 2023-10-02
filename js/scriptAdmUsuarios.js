const btnNuevo = document.querySelector('#btnNuevo');
const btnAceptar = document.querySelector('#btnAceptar');
const btnCancelar = document.querySelector('#btnCancelar');
const btnConfirmarDesactivar = document.querySelector('#btnConfirmarDesactivar');
const btnCancelarDesactivar = document.querySelector('#btnCancelarDesactivar');

const formModal =  document.querySelector('#formModal');
const desactivarModal = document.querySelector('#desactivarModal');



function añadirBotones(index){
    const table = document.getElementById('tablaUsuarios');
    const tbody = table.querySelector('tbody');
    const rows = tbody.querySelectorAll('tr');
    let rowCounter = 0;
    const editarIcon = document.createElement('i');
    const desactivarIcon = document.createElement('i');

    editarIcon.className= 'bx bx-edit-alt';
    desactivarIcon.className= 'bx bxs-user-x';

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const td = cells[index];

        const  btnDesactivar = document.createElement('button');
        const btnEditar = document.createElement('button');


    
        btnDesactivar.className = 'btnCelda';
        btnEditar.className = 'btnCelda';

        btnDesactivar.id = 'btnEstado_'+rowCounter;
        btnEditar.id = 'btnEditar_'+rowCounter;

        btnDesactivar.addEventListener('click', (e) =>{
            e.preventDefault();
            desactivarModal.style.display = 'flex';
        });

        btnDesactivar.appendChild(desactivarIcon);
        btnEditar.appendChild(editarIcon);
        
        td.appendChild(btnEditar);
        td.appendChild(btnDesactivar);


        rowCounter++;
    });
}


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

btnCancelarDesactivar.addEventListener('click', (e) =>{
    e.preventDefault();
    desactivarModal.style.display = 'none';
});


btnConfirmarDesactivar.addEventListener('click', (e) =>{
    e.preventDefault();
    desactivarModal.style.display = 'none';
});


window.onload = function(){
    añadirBotones(5);
}