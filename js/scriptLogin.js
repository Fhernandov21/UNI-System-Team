const form = document.getElementById("formLogin");

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const usuario = document.getElementById("usuario").value;
            const pass = document.getElementById("pass").value;

            if(usuario=="Fher" && pass=="123"){
                window.location.href = "../html/gestionar_Usuarios.html";
            }
            else{
                alert("Usuario no existente. Pista: Usuario -> Fher, Contraseña -> 123");
            } 
        });
