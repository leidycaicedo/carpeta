function validar(){

    var usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;

    if (usuario =="") {
        alert("el campo de usuario esta vacio") 
     }else{
        if (clave=="") {
            alert("el campo de contraseña esta vacio ")
        }else{
            if (usuario=="user" && clave=="1234") {
                alert("¡¡¡BIENVENIDO!!!   "+usuario)
                
            }else{
                alert("usuario o clave invalidos   intente de nuevo...")
               
            }
        }
     }
    }