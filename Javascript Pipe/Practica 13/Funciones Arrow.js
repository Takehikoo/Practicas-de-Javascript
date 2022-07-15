// Funciones Clasicas //
    miFuncion();                                            // Se puede usar el metodo Hosting, desde una funcion declarada normalmente //
    
    function miFuncion(){
        console.log("saludos desde una funcion declarada normal");
    }

// Funciones Arrow //    
    //miFuncionFlecha()                                       // No se puede usar el metodo Hosting, desde una funcion arrow //
    let miFuncionFlecha= () =>{
        console.log("saludos desde la funcion flecha");
     }
     miFuncionFlecha();

    // Funciones con argumentos //
     let funcionConArgumentos = (num1,num2)=> {return "El resultado de la suma es " + (num1+num2)}
     console.log(funcionConArgumentos(10,60));
     console.log(funcionConArgumentos("Keep", " Going"));
     

    // Funcion con objetos // 
     let funcionConObjetos = (nombre,apellido,edad) => ({nombre:nombre, apellido:apellido, edad:edad}); 
     console.log(funcionConObjetos("Felipe","Guzman",18));

     
