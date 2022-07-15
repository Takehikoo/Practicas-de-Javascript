
    class Producto {
        static contadorProducto = 0;
        constructor (nombre, precio){
            this._nombre= nombre;
            this._precio=precio;
            this._idProducto = ++Producto.contadorProducto;
        

        }
       get idProducto(){return this._idProducto;}
       get nombre(){return this._nombre;}
       set nombre(nombre){return this._nombre=nombre;}
       get precio (){return this._precio;}
       set precio(precio){return this._precio=precio;}
       toString(){return " idProducto: " + this._idProducto +", producto: "+ this._nombre + ",  precio: " + this._precio;}

    }

    class Orden{
        static contadorOrden =0;
        static get MAX_PRODUCTOS(){return 5;}
        constructor(){
            this._idOrden= ++Orden.contadorOrden;
            this._productos=[];
        }
        get idOrden(){return this._idOrden;}
        agregarProducto(producto){
            if(this._productos.length<Orden.MAX_PRODUCTOS){
                this._productos.push(producto);
            } else {
                console.log("Has superado el limite para agregar productos a tu orden");
            }
        }
        calcularTotal(){
            let total=0;
            for(let producto of this._productos){
                total+= producto.precio;
            }
            return total;
        }
        mostrarOrden(){
            let orden = "";
            for(let producto of this._productos){
                orden +="\n" + producto.toString();
            }
            console.log("idOrden: " + this._idOrden + ", Total : " + this.calcularTotal() + " " + orden);
        }

       
    }




    let producto1= new Producto("pantalon",5000);
    console.log(producto1.toString());
    
    let producto2= new Producto("remera",2500);
    console.log(producto2.toString());

    let orden1= new Orden();

    orden1.agregarProducto(producto1);
    orden1.agregarProducto(producto2);
    console.log(orden1.calcularTotal());
    console.log(orden1.mostrarOrden());
    

    
    
