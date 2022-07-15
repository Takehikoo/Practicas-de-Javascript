// Manejo de errores //


"use strict"                            // Mientras usemos "use strict", no podemos usar variables sin definir //
try{
    x=10                                // El uso de try, influye en descubrir errores en la sintaxis //
}       
catch(error){
    console.log("El error es: " + error.message);                 // El uso de catch sirve para mostrar el resultado del error en la sintaxis, en try //  
}   
    
finally{
    console.log("Fin de la revision");   // El uso de finally, sirve para mostrar a toda costa el resultado, sin depender de try //   
}

    //* Clausula Throws *// 

