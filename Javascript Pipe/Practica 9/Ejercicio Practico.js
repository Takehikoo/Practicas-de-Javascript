
    // Deficion de clase Persona // 

    class Persona{
        static contadorPersona=0;
        constructor(nombre,apellido,edad){
            this._nombre = nombre;
            this._apellido = apellido;
            this._edad= edad;
            this._idPersona = ++Persona.contadorPersona;
        }
        get idPersona(){return this._idPersona}
        get nombre(){return this._nombre}
        set nombre(nombre){return this._nombre=nombre}
        get apellido(){return this._apellido}
        set apellido (apellido){return this._apellido = apellido}
        get edad ( ){return this._edad}
        set edad (edad){ return this._edad = edad}
        toString(){return this._idPersona+ " " + this._nombre + " " + this._apellido + " " + this._edad }
    }

        class Empleado extends Persona{
            static contadorEmpleado = 0;
            constructor (nombre,apellido,edad,sueldo){
            super(nombre,apellido,edad)
            this._sueldo=sueldo;
            this._idEmpleado = ++ Empleado.contadorEmpleado;
        }
        get idEmpleado(){return this._idEmpleado}
        get sueldo(){return this._sueldo}
        set sueldo(sueldo){return this._sueldo = sueldo}
        toString(){return super.toString()+ " " + this._idEmpleado + " " + this._sueldo}
    }

        class Cliente extends Persona {
            static contadorCliente = 0;
            constructor (nombre,apellido,edad,fechaRegistro){
                super(nombre,apellido,edad)
                this._fechaRegistro = fechaRegistro;
                this._idCliente = ++Cliente.contadorCliente;
            }
            get idCLiente(){return this.idCLiente}
            get fechaRegistro(){return this._fechaRegistro}
            set fechaRegistro(fechaRegistro){return this._fechaRegistro=fechaRegistro}
            toString(){return super.toString() + " "  + this._idCliente + " "+ this._fechaRegistro}

        }

        let persona1 = new Persona ("Felipe", "Guzman",19);
        console.log(persona1.toString());


        let empleado1= new Empleado("Kiara", "Gonzales", 25, 50000);
        console.log (empleado1.toString());

        let empleado2= new Empleado ("Lucas", "Aloy", 15 , "30000");
        console.log(empleado2.toString());

        let cliente1= new Cliente ("Jesica", "Arias", 17, 2002);
        console.log(cliente1.toString());

        let cliente2= new Cliente ("Fernando", "Maspero", 35, 2017);
        console.log(cliente2.toString());


