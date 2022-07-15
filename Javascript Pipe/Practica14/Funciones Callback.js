// Callback //
    function Imprimir(argumento){
        console.log("La suma anterior dio: "+argumento);
    }
    let phares= (string) => {
       console.log ("La frase anterior fue: " + string );
    }

    function Suma(op1,op2,funcion){
        let suma= (op1+op2);
        if(suma>=100){
        return funcion(suma);           // Como argumento pasamos la funcion que Imprimir, pero como parte de su argumento(de la funcion) pasamos la variable suma//
        }else{ return funcion("Intenta de nuevo pa, vamos a equivocarnos ");}            // Como argumento pasamos la funcion Phares, pero como parte de su argumento(de la funcion) pasamos la variable string //
    }

    Suma(10,2,phares);
    Suma(100,20,Imprimir);
    Suma(100,50,phares);

// Time Out // 

    function TiempoFuera(){
        console.log("Se ejecuto esta funcion en 8 segundos");
    }

    setTimeout(TiempoFuera,8000);       // Se ejecuta esta funcion en 8 segundos //
    
    setTimeout(()=>{console.log("Se ejecuta esta funcion en 5 segundos")},5000);     // Funcion Arrow dentro de una funcion setTimeOut //
    // DENTRO DE ESTA FUNCION (setTimeOut), NO IMPRIME DE MANERA CRONOLOGICA EL RESULTADO DE LA FUNCION //
    // IMPORTA SOLAMENTE EL SEGUNDO ARGUMENTO, QUE DETERMINA EL TIEMPO EN QUE SE VA A IMPRIMIR LA FUNCION // 

    // Relog // 
    let relog = () => {
        let fecha= new Date();
        console.log(fecha.getDay()+ ":"+ fecha.getMinutes() + ":"+ fecha.getSeconds());
    }    

    setInterval(relog,10000) // Se ejecuta la funcion cada 10 segundos //

    