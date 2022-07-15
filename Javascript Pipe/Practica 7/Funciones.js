// FUNCIONES //
function primerFuncion (x,b){
    suma= x + b;
    return suma;

}

let resultado1= primerFuncion(20,129);
console.log("El perimer resultado es : ", resultado1);

let resultado2= primerFuncion(60,708);
console.log("El resultado de la segunda suma es : " + resultado2);


let _firstFuncion= function (a,b){ return ((a+b) /2);};

let resultados =_firstFuncion(50,50);
console.log(resultados);

//Ejecutando una funcion sola//

(function felipe(a,b){
    console.log("Se ejecuta esta funcion sola");

}) (10,20);

(function (x,z){
     console.log("La multiplicacion entre " + x + " y " + z + " es igual a " + (x*z));
})(5,100);

//Ejecutando una funcion de expresion actualizada//

const _newfuncion = (a,b) => a + b;

console.log(_newfuncion (10,20));

const _persona = (nombre,apellido) => nombre + apellido ;

console.log("La persona1 es : "+ _persona("Felipe ", " Guzman") )
console.log("La persona2 es:  "+_persona ("Luna", " Guzman"));

// Funciones type ARGUMENTS //

const _argumentsfunction= (nombre, edad,sexo,genero,trabajo) => console.log(arguments[0]);
const _argumentsfunction1= function (nombre, edad,sexo,genero,trabajo){return console.log(arguments[0])};

console.log(_argumentsfunction("Federico", "Maspero", "Masculino","Puto", "Ingeniero en Diseño Grafico"));
console.log(_argumentsfunction1("Federico", "Maspero", "Masculino","Puto", "Ingeniero en Diseño Grafico"));

// RECORRER FUNCION Y SUMAR 

    let _sumaDeNumbers= sumar(25,500,82);
    console.log(_sumaDeNumbers);

    function sumar (){
        let _resultado=0;
        for(let i = 0;i<arguments.length;i++){
            _resultado+= arguments[i];

        }
        return _resultado;
    }


    // Paso por referencia en Funciones //

    const _firstperson= {
        name: "Facundo",
        secondName : "Gonzales",
        age: 19,
    }

    function cambiarValoresObjeto(f){
        f.name = "Lucas";
        f.secondName = "Arias";
        f.age = 20;

    }
    cambiarValoresObjeto(_firstperson);
    console.log(_firstperson);