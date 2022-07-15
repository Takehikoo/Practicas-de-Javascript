//Datos Numericos//
var Edad= 19;
console.log(Edad);

//Dato String//
var nombre="Felipe";
console.log(nombre);

//Dato Object//
var persona1= {
    name: "Lucas",
    age: 20,
    genero: "Masculino",
    programador: false,
}
console.log(persona1);

//Dato boolean//
var tienesexo= false;
console.log(tienesexo);

//Dato Funcion//
function CalcularEdad() {

}
console.log( CalcularEdad);

//Dato SIMBOL//
var simbolo= Symbol("mi simbolo ");
console.log(simbolo);

//Dato Clase//
class Persona{
    constructor(apellido,nombre){
        this.apellido =apellido;
        this.nombre= nombre;
        
    }
}
console.log(Persona);

//Dato Undefined//
var x;
console.log(x);

//Dato Null//
var a= null;
console.log(a);

var nombre= "Luna";
var apellido= "Guzman";

var nombrecomplete= nombre + " " + apellido;
console.log("El nombre es : ", nombrecomplete);
