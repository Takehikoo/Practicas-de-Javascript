let miPromesa = new Promise ((resolver,rechazar)=>{     // Declaramos una variable que tiene como objeto Promise //                    
    let x = true;                                       // El primer argumento tendra un callBack, que pasa por argumento resolver, y rechazar
    if(x){
        resolver("Esto funciona como argumento en la variable miPromesa, siempre y cuando se realize la promesa")
    }else{
        rechazar("Esto funciona como argumento en la variable miPromesa, siempre y cuando se realize la promesa")
    }
});

miPromesa.then((argumento)=>{
    console.log (argumento)
}).catch( miPromesa.catch((argumento)=>{
 console.log(argumento);
}))

let promesa2= new Promise((resolver)=>{                         // Creamos otra variable, que contiene un objeto de la clase Promesa//
    setTimeout(()=>{                                            // Dentro de ella tendra como setTimeOut y pasara como argumento//
        resolver("Saludos desde setTimeOut y promesa2");
    },5000)
});

promesa2.then((argumento)=>{                                    // Si se realizo la promesa, se hara llamar la funcion .then con su argumento dentro de promesa2 //
    console.log(argumento);
})


    // EJEMPLO DE PROMESA CON TIRAR LOS DADOS //
        let doTask = (tiradas)=> new Promise((resuelto,rechazado)=>{          // Se crea una funcion DADI que pasa por argumento las tiradas del dado// 
            let dado = [];                                                   // Dentro de la funcion tenemos una Promesa, que tiene como finalidad tirar un dado //
            for(let i=0;i<tiradas;i++){                                     // Recorremos el array con un for,
                const number = 1 + Math.floor(Math.random() * 6);                   // Esta linea de codigo es el aleatorio del dado cada vez que tira, desde 1 hasta el 6 //
                dado.push(number);                                         // y pusheamos el array con numeros aleatorios, simulando a la realidad //                        
                if(number == 6){                                          // IF el dado lanza 6 , lanzamos un error existe y llamamos el callback rechazado//
                    rechazado({error:true,                     //  Tenemos como argumento, el callback rechazado, un objeto con un valor Booleano y uno como valor como array//
                     values: "Sacaste 6, perdiste"})
                } else {                                                 // IF el dado no lanza 6, no lanzamos ningun error y llamamos el callback resuelto//
                    resuelto ({error: false, values: dado})    //  Tenemos como argumento, el callback rechazado, un objeto con un valor Booleano y uno como valor como array//
                }
            }
        })

    doTask(5).then((valor)=>{   // Ya tenemos como argumento un objeto y un array con los numero de dados lanzados, ahora solo falta hacer el Callback del resuelto//
        console.log(valor)      // Imprimimos el argumento de la promesa, si reuelta//                              
    })
    .catch((valor)=>{           // Aca es lo mismo con el anterior, solo que imprimimos el argumento de la promesa no resuelta //
        console.log(valor);
    })

// Palabra Async con Promesas //

    async function funcionYAsync(){                                // Al usar la palabra async creamos una funcion que espera una promesa //
        return "Este es el argumento para la funcion callBack desde async";    // Dentro de la funcion se pasa como argumento, para que despues se pase a los callbacks //
    }
    funcionYAsync().then((mensaje)=>{
        console.log(mensaje)
    })

   