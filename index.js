function validar() {
    var usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    if (usuario==""&&contraseña=="") {
        alert("los campos son obligatorios...por favor digite los campos ")
    }else{
        if (usuario=="Pikachu"&& contraseña == "pikachu1234") {
            window.location.href ="http://127.0.0.1:5501/proyecto.html"
            
        }else{
            if (usuario=="Bulbasaur"&& contraseña=="bulbasaur1234") {
                window.location.href="http://127.0.0.1:5501/proyecto.html"
                
            }else{
                alert ("lo siento no estas en la base de datos ")
            }
        }
    }
    
}