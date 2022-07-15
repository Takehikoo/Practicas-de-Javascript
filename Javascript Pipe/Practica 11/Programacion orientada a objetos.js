class Empleado {
    static idEmpleado=0;
    constructor(nombre,sueldo){
        this._nombre=nombre;
        this._sueldo=sueldo;
        this.contadorEmpleado=++Empleado.idEmpleado;
    }
    obtenerDetalle(){return "Empleado " +this.contadorEmpleado +" \nNombre: " +this._nombre + "\nSueldo: " + this._sueldo;} 
}

    class Gerente extends Empleado{
        static idGerente=0;
        constructor(nombre,sueldo,departamento){
            super(nombre,sueldo)
            this._departamento=departamento;
            this.contadorGerente=++Gerente.idGerente;
        }
        obtenerDetalle(){return super.obtenerDetalle() +"\nDepartamento: " +this._departamento}
    }

    class Personas{
        constructor(nombre){
            this._nombre=nombre;
        }
        toString(){return this._nombre;}
    }

    let empleado1= new Empleado("Juan", 80000);
    console.log(empleado1.obtenerDetalle());

    let empleado2=new Empleado("Felipe",50000);
    console.log(empleado2.obtenerDetalle());

    let gerente1=new Gerente("Ricardo",150000,"Sistemas");
    console.log(gerente1.obtenerDetalle());

    console.log("----------------------- Polimorfimos de Imprimir un Objeto -----------------------------------------------\n")

    // Polimorfimos de Imprimir un Objeto // 
        // A traves de una funcion que como argumento es el objeto en cuestion //
        function imprimir(objeto){
            console.log(objeto.obtenerDetalle());
        }
        
        imprimir(empleado1);
        imprimir(empleado2);

        // Instance Of // 
            function instatanceOF(objeto){
              if(objeto instanceof Empleado){
                console.log("El objeto " + objeto.contadorEmpleado + " es una instancia de Empleado");
              }
              if(objeto instanceof Gerente){
                console.log("El objeto " + objeto.contadorEmpleado + " es una instancia de Gerente");
              }
              
            
                
            }

            console.log(instatanceOF(empleado1));
            console.log(instatanceOF(empleado2));
            console.log(instatanceOF(gerente1));

           
       
