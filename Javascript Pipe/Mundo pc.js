class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada= tipoEntrada;
        this._marca=marca;
    }
    get tipoEntrada(){return this._tipoEntrada;}
    set tipoEntrada(tipoEntrada){this._tipoEntrada=tipoEntrada;}
    get marca(){return this._marca;}
    set marca(marca){this._marca=marca;}
}   

    class Raton extends DispositivoEntrada{
        static idRaton=0;
        constructor(tipoEntrada,marca){
            super(tipoEntrada,marca)
            this.contadorRatones= ++Raton.idRaton;
        }
        get idRaton(){return this.contadorRatones;}
        toString(){return "idRaton: "+this.contadorRatones +" Entrada: " + this._tipoEntrada + "  Marca: "  +this._marca}

            
    }
            
    
    class Teclado extends DispositivoEntrada{
        static idTeclado=0;
        constructor(tipoEntrada,marca){
            super(tipoEntrada,marca)
            this.contadorTeclado=++ Teclado.idTeclado;
        }
        toString(){return " IdTeclado: "+this.contadorTeclado + " Entrada: " + this._tipoEntrada + " Marca: " + this._marca}

    }

    class Monitor{
        static idMonitor=0;
        constructor(marca,tamaño){
            this._marca= marca;
            this._tamaño= tamaño;
            this.contadorMonitores= ++Monitor.idMonitor;
        }
        get marca(){return this._marca;}
        set marca(marca){this._marca = marca;}
        
        get tamaño(){ return this._marca; }
        set tamaño(tamaño){ this._tamaño=tamaño; }
        toString(){ return "idMonitor: " +this.contadorMonitores+" Marca: "+this._marca+ " Tamaño: " + this._tamaño; }

    }
        
    class Computadora {
        static idComputadora=0;
        constructor(nombre,monitor,teclado,raton){
            this.contadorComputadora=++Computadora.idComputadora;
            this._nombre=nombre;
            this._monitor=monitor;
            this._teclado=teclado;
            this._raton=raton;

        }
        toString(){return "idComputadora: "+this.contadorComputadora+"\nNombre: " + this._nombre + "\nMonitor: " + this._monitor + "\nTeclado: " + this._teclado + " \n Raton: " + this._raton;}

    }
    class Orden{
        static idOrden=0;
        constructor(){
            this._contadorOrden= ++ Orden.idOrden;
            this._computadora=[];
        }
        agregarComputadora(computadora){
            return this._computadora.push(computadora);
        }
        mostrar(){
            let orden="";
            for(let computadora of this._computadora){
                orden+= "\n" + computadora.toString() + " ";
            }
            console.log(orden);
        }
        get contadorOrden(){return this._contadorOrden}
        set contadorOrden(contadorOrden){return this._contadorOrden=contadorOrden;}

        get computadora(){return this._computadora;}
        set computadora(computadora){return this._computadora=computadora;}
        toString(){return "Orden N°: " +this.contadorOrden + "\n"+ this._computadora; }
        
    }

            // OBJETOS RATON // 
        let raton1= new Raton("USB", "Redragon");
        let raton2=new Raton("Bluetooh","Logitech");
        

            // OBJETOS TECLADO
        let teclado1= new Teclado("HDMI","Xiaomi");
        let teclado2=new Teclado("USB","Razer");
        

            // OBJETOS MONITOR //
        let monitor1=new Monitor("SAMSUNG","180*20");
        let monitor2=new Monitor("LG","150*782");
       

            // OBJETO COMPUTADORA //
        let computadora1= new Computadora("PHP",monitor1,teclado1,raton1);
        let computadora2= new Computadora("Ryzen",monitor2,teclado2,raton2);


            // ORDEN // 
        let orden1= new Orden();
        orden1.agregarComputadora(computadora1);
        console.log(orden1.toString());

        let orden2=new Orden();
        orden2.agregarComputadora(computadora2);
        console.log(orden2.toString());
        

        