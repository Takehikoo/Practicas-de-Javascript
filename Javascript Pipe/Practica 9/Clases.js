// Clases //
    // Definicion de Clases // 
    
     class Persona{
        static contadorObjetos = 0;                             // Contador Static iniciada en 0 //
        constructor ( nombre, apellido, edad , sexo , trabajo){
            this._nombre = nombre;
            this._apellido = apellido;
            this._edad = edad;
            this._sexo = sexo;
            this._trabajo = trabajo;
            if(Persona.contadorObjetos>Persona.max_Obj){
                console.log("Se supero el limite de para crear objetos");
            }
            else{
                this.idPersona = ++Persona.contadorObjetos;    // Contador Static para obtener cuantos objeto se creo a partir de la clase Persona //    
            }
            
        }
        static get max_Obj(){return 5;}
        get completo(){ return "Objeto N°" + this.idPersona + ": su nombre es "+this._nombre + " y su apellido "+ this._apellido}             // Inclusion de GET en Clases //
        set chanceName(nombre){return this._nombre = nombre}
        get sexo (){ return "Su sexo es : " + this._sexo;}

        // Usamos una funcion ya definida de la Clase Objects de Javascript, la clase Padre de todas las clases //
        toString(){return this.completo}

        // Usamos static ya definida de la Clase Objeto de Javascript, la clase Padre de todas las clases //
        static saludar(){ 
            return "Saludos desde metodo static";}
        
        // Static pero como argumento devuelve una propiedad de un Objeto x //    
        static saludar2(persona){return console.log(persona._nombre)}
        
     }


    // Definicion de Objeto // 
         let persona1 = new Persona("Marcos", "Gomez", 22 , "Masculino","Secundario");
       
        // Imprimir Objeto //
         console.log(persona1);
        
         console.log( persona1.completo);

            // Cambiar valor de la Propiedad _nombre con SET //
            persona1.chanceName = "Alejandro";
                    
         console.log(persona1.completo);
        
    // Herencia de Clases //
     class Curriculum extends Persona{
        constructor (nombre, apellido, edad , sexo , trabajo,tituloSecundario,tituloUniversidad){
            super(nombre, apellido, edad , sexo , trabajo);

            this._tituloSecundario = tituloSecundario;
            this._tituloUniversidad = tituloUniversidad;
        }
        get curriculum (){ return " Su curriculum actualmente es : "+ " Titulo Secundario : "+ this._tituloSecundario + " ,  Titulo Universitario : " + this._tituloUniversidad };
        set curriculum(secundario){
            this._tituloSecundario = secundario;
        }
        
    // Sobrescritura de la Funcion "completo" con un nuevo return//
        completo(){ return super.completo + " con un titulo en : " + this._tituloSecundario + " y un titulo Universitario de : " + this._tituloUniversidad }

         }


     let curriculumPersona1= new Curriculum ("Felipe", "Guzman", 19, "Masculino", "Adriestrador Canino","Bachillerato","Licenciado en Sistema");
     console.log(curriculumPersona1);
     
     curriculumPersona1.curriculum = "Administracion de empresas";
     console.log(curriculumPersona1);
    
    // Impresion de la Sobrescritura //
     console.log(curriculumPersona1.completo());

    // Imprimimos funcion toString de la clase Padre OBJECTS // 
    console.log(persona1.toString());
    console.log(curriculumPersona1.toString());

    // Imprimimos funcion static de la clase Padre Objects //

    //console.log(persona1.Saludar());    // No es posible llamar a la funcion static porque es un objeto de la clase Persona //
    console.log(Persona.saludar());       // Pero si se puede llamar la funcion desde las clase al que pertenece //
    //console.log(curriculumPersona1.saludar()) // Lo mismo pasa si queremos llamar la funcion desde un objeto de la clase Hija de la clase Padre // 
    console.log(Curriculum.saludar());      // Pero si desde las clases hija de 
    // EL METODO STATIC SE ASOCIA CON NUESTRAS CLASES, NO CON OBJETOS //

        // metodo static pero con argumento de un objeto //

         console.log(Persona.saludar());
         console.log(Curriculum.saludar2(persona1));

     // Imprimimos el contador Static cuantos objetos se creo a partir de la clase Persona //
         console.log(Persona.contadorObjetos);
         
     console.log(persona1.completo);  
     console.log(curriculumPersona1.completo());

     let curriculumPersona2 = new Curriculum("Ailen", "Gonzales",25,"Femenino","Atencion al clientet","Ciencias Sociales","Psicologa");
     let curriculumPersona3 = new Curriculum("Tajic", "Arias",17,"Masculino","Vendedor de Autos","Economia","Licenciado en Historia");    
     let curriculumPersona4 = new Curriculum("Ariel", "Lell",29,"Masculino","Vendedor kiosco","Ciencias Sociales","Psicologa");
     let curriculumPersona5 = new Curriculum("Ailen", "Gonzales",25,"Femenino","Atencion al clientet","Ciencias Sociales","Psicologa");
       
     
     