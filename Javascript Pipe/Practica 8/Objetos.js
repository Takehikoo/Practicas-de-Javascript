    // Crear Objetos //

     const persona1= {
        name: "Federico",                      // propiedad 1 //
        seconName: "Gonzales",                 // propiedad 2 //
        age: 20,                               // propiedad 3 //
        email: "fedegonza@gmail.com",          // propiedad 4 //
        trabajo: false,                        // propiedad 5 //

      }

     console.log(persona1);

        // Acceder a sus propiedades //     

        console.log(persona1.name);
        console.log(persona1.seconName);
        console.log(persona1.age);
        console.log(persona1.email);
        console.log(persona1.trabajo);


        // Inclusion de Funciones en Objetos / clases // 

        const persona2={
        name: "Facundo",                       // propiedad 1 //
        seconName: "Guzman",                  // propiedad 2 //
        age: 16,                             // propiedad 3 //
        email: "facuMP@gmail.com",          // propiedad 4 //
        trabajo: false,                    // propiedad 5 //
        completeName: function(){         // propiedad 6 //
            return this.name +" "+this.seconName; 
        }

        }

     console.log(persona2.completeName()) ;


     // Otra forma de Crear Objetos //

        const persona3= new Object;
        persona3.name= "Felipe";                                  // propiedad 1 //
        persona3.seconName= "Guzman";                            // propiedad 2 //
        persona3.age= 18;                                       // propiedad 3 //
        persona3.email="guzmanfelipe@gmail.com"                // propiedad 4 //
        persona3.trabajo=false;                               // propiedad 5 //
        persona3.completeName = function(){                  // propiedad 6 //
        return this.name + " " + this.seconName;
        }                                                     
    
     console.log(persona3.completeName());

     // Otra forma de acceder a las propiedades // 
        console.log(persona3["name"]);
        console.log(persona3["seconName"]);
        console.log(persona3["age"]);
        console.log(persona3["email"]);
        console.log(persona3["trabajo"]);
        console.log(persona3["completeName()"]);

        // Recorrer el Objeto con un for //
        let contador=0;
        for (nombres in persona3){
        contador++;
        console.log("Posicion: "+contador)
        console.log([nombres]);
        console.log(persona3);
    }

        // Agregar propiedades //
        persona3.deseo= "Trabajar";
        console.log(persona3);

        // Eliminar propiedades //

        delete persona3.trabajo;
        console.log(persona3);
    

        // FORMAS DE IMPRIMIR EL VALOR DE UN OBJETO // 

            // Concatenar cada valor con cada propiedad //
        
            console.log(persona3.name + "," +persona3.seconName + "," + persona3.age + "," +persona3.email + "," + persona3.completeName() + ", " + persona3.deseo);
    
            // For in // 

            for (propiedad in persona3){
                console.log(persona3[propiedad]);
            }
        
        // Con un arreglo // 

            let valorPersona3 = Object.values(persona3);
            console.log(valorPersona3);
        
        // Con un String //

            valorPersona3String = JSON.stringify(persona3);
            console.log(valorPersona3String);
    
        // Metodo GET // 

         const persona4= {
         name: "Alex",                            // propiedad 1 //
         seconName: "Machine",                   // propiedad 2 //
         age: 12,                               // propiedad 3 //
         email: "alexKPO10@gmail.com",         // propiedad 4 //
         trabajo: false,                      // propiedad 5 //
         get completeName(){                 // propiedad 6 //
            return this.name +" "+this.seconName; 
         },      
         languaje:"español",                  // propiedad 7 //            
         get mayuscula (){
            return this.languaje.toUpperCase();    // propiedad 8 //  

         }
                                    
                    
         }

         console.log(persona4.completeName);
         console.log(persona4.mayuscula);
    

        // Metodo SET //
    
    
         let persona5= {
         name: "Federico",                      // propiedad 1 //
         seconName: "Gonzales",                 // propiedad 2 //
         age: 20,                               // propiedad 3 //
         email: "fedegonza@gmail.com",          // propiedad 4 //
         trabajo: false,         
         languaje: "english",               // propiedad 5 //
         get mayuscula(){                  // propiedad 6 //              
            return this.languaje.toUpperCase();
         },
         set mayuscula(x){     // propiedad 6 //
            this.languaje = x.toUpperCase();
         }
         }
    
         persona5.mayuscula = "spanish";
         console.log(persona5.languaje);


        // Constructor //

         function Animales(name,tipo,patas){ 
         this.name = name;                      // propiedad 1 //
         this.tipo = tipo;                     // propiedad 2 //
         this.patas =patas;                   // propiedad 3 // 
         }

         let perro1 = new Animales("Bulldog","Raza", 4 );
         console.log(perro1);
    
         let perro2 =new Animales("Pastor Aleman", "Canino", 4);
         console.log(perro2);
    
         let perro3 = new Animales ("Bulldog Frances", "Perro doméstico", 4);
         console.log(perro3);

        // Agregar Funciones al Metodo Constructor // 

         function Galletitas (nombre, tipo,calidad,sabor){
         this.nombre = nombre;                              // propiedad 1 //
         this.tipo = tipo;                                 // propiedad 2 //
         this.calidad = calidad;                          // propiedad 3 //
         this.sabor = sabor;                             // propiedad 4 //
         this.completeName = function (){
            return this.nombre + " " + this.sabor;     // propiedad 5 //
         }
         }

         let sonrisas = new Galletitas ("sonrisas", "dulces", 8 , " Las Mejores");

         console.log(sonrisas.completeName());

         let chocolinas = new Galletitas ("chocolinas", "amargas", 9, "Nashee");
         console.log(chocolinas);


        // Protoype // 

         Galletitas.prototype.gramos= "200g";
    
         console.log(chocolinas.gramos);
         console.log(sonrisas.gramos);

         chocolinas.gramos = "500g";

         console.log(chocolinas.gramos);
    
        // Call // 


         let banda1={
         nombre: "Conociendo A Rusia",
         albunes: 3,
         cantante: "Ruso",
         opinion : function(puntaje){ return "El puntaje de la banda es : " + puntaje;},
         completo :function (puntaje){ if(puntaje>=0){
            return("El puntaje de la banda es un : " + puntaje);} 
            else { return  "la banda se llama : " + this.nombre + " y tiene " + this.albunes + " álbumes"}
         }
        }

         console.log(banda1.completo());
    
         let banda2 ={
         nombre: "Airbag",
         albunes : 5,
         cantante : "Pato",

         }
            // Procedemos a Llamar la funcion // 
                console.log(banda1.completo.call(banda2));

        // Call con argumentos en las funciones // 

         console.log(banda1.completo.call(banda2,10));
         
        // Apply //

         console.log(banda1.completo.apply(banda2));

            // Apply con argumentos en las funciones //
                let puntaje = [6];          //  se crea un arreglo para poder pasar los argumentos de la funcion Opinion  // 
                console.log(banda1.opinion.apply(banda2,puntaje));       
                console.log(banda1.completo.apply(banda2,puntaje));

                
