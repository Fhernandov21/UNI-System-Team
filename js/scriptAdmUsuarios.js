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




    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const td = cells[index];

        const btnDesactivar = document.createElement('button');
        const btnEditar = document.createElement('button');

        let editarIcon = document.createElement('i');
        let desactivarIcon = document.createElement('i');
        editarIcon.className= 'bx bx-edit-alt';
        desactivarIcon.className= 'bx bxs-user-x';


        btnDesactivar.className = 'btnCelda';
        btnEditar.className = 'btnCelda';

        btnDesactivar.id = 'btnEstado_'+rowCounter;
        btnEditar.id = 'btnEditar_'+rowCounter;

        btnDesactivar.addEventListener('click', (e) =>{
            e.preventDefault();
            desactivarModal.style.display = 'flex';
        });

        btnEditar.addEventListener('click', (e) =>{
            e.preventDefault();
            formModal.style.display = 'flex';

            const usuario = row.cells[0].textContent;
            const correo = row.cells[1].textContent;

            const txtUser = formModal.querySelector('#usuario');
            const txtEmail = formModal.querySelector('#correo');

            
            txtUser.value = usuario;
            txtEmail.value = correo;

        });

        td.appendChild(btnEditar);
        td.appendChild(btnDesactivar);

        btnDesactivar.appendChild(desactivarIcon);
        btnEditar.appendChild(editarIcon);


        rowCounter++;
    });
}


btnNuevo.addEventListener('click', (e) =>{
    e.preventDefault();
    const txtUser = formModal.querySelector('#usuario');
    const txtEmail = formModal.querySelector('#correo');
    txtUser.value = "";
    txtEmail.value = "";
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


const dialogLogout = document.getElementById("dialogLogout")
const btnLogout = document.getElementById("btnLogout");
const btnCancelLogout = document.getElementById("btnCancelLogout");
const a_logout = document.getElementById("a_logout");

a_logout.addEventListener('click', (e)=>{
    e.preventDefault();
    dialogLogout.style.display = 'flex';
})
btnCancelLogout.addEventListener('click', (e)=>{
    e.preventDefault();
    dialogLogout.style.display = 'none';
})
btnLogout.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href = "../html/Login.html";
})


window.onload = function(){
    añadirBotones(5);
}
