let nombreApellido = (nombre, apellido)=>{
    return console.log("Tu nombre es : " + nombre + " y tu apellido es : " + apellido);
}
function Imprimir(name,secondName, fn){
        return fn(name,secondName);
}

Imprimir("Felipe","Guzman",nombreApellido);
Imprimir("Luna", "Arias", nombreApellido);

