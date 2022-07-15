//SUMA -- RESTA -- MULTIPLICACION -- DIVISION -- RESTO -- INCREMENTO -- DECREMENTO -- //

let x= 10, y=5;


let suma = x+y;
console.log("El resultado de la suma entre ", x , "y ", y , "es de : ", suma );

let resta= x-y;
console.log("El resultado de la resta entre ", x , "y ", y , "es de : ", resta );

let multiplicacion= x*y;
console.log("El resultado de la multiplicacion entre ", x , "y ", y , "es de : ", multiplicacion );

let division= x/y;
console.log("El resultado de la division entre ", x , "y ", y , "es de : ", division );

let restoDivision=x % y;
console.log("El resto de la division entre ", x , "y ", y , "es de : ", restoDivision );

x++;
console.log("El incremento de 10 es de : ",x);

y--;
console.log("El desincremento de 5 es : ",y);

// OPERADORES ABREVIADOS SUMA -- RESTA -- MULTIPLICACION -- DIVISION -- RESTO -- // 

let numeroPrueba= 5;

numeroPrueba+=50;
console.log(numeroPrueba);

numeroPrueba -=10;
console.log(numeroPrueba);

numeroPrueba/=5;
console.log(numeroPrueba);

numeroPrueba*=2;
console.log(numeroPrueba);

numeroPrueba%=2;
console.log(numeroPrueba);

// -- OPERADOR DE IGUALACION -- // 

let numero1 = 3; 
let numero2=4; 
let numero3="3";
let numero4= 3;

//sin importar el tipo de dato incluyendo los valores dentro de el//
let comprobar = numero1 == numero2;
console.log(comprobar);

comprobar=numero1 == numero3;
console.log(comprobar);

//importa el dato incluyendo los valores dentro de el//

let check= numero1 ===numero3;
console.log(check);



// -- OPERADOR DE DISTINCION -- // 

//sin importar el tipo de dato incluyendo los valores dentro de el//
comprobar= numero1 != numero2;
console.log(comprobar);

comprobar= numero1 != numero4;
console.log(comprobar);

//importa el dato incluyendo los valores dentro de el//

comprobar = numero1 !== numero2;
console.log(comprobar);

comprobar = numero1 !== numero3;
console.log(comprobar);


//Practicas//

//Estructura IF//

let n = 10;

if(n%2==0){
    console.log("El numero es par");
}
else{
    console.log("El numero es impar");
}

let edad= 25, edad2= 17;
let adulto=18;

if( edad >= adulto){
    console.log("Es adulto");

}
else{
    console.log("No es adulto, es un pibe");
}


//ESTRUCTURA && y || //

//  && and = solo si los 2 son true, devuelve true. //
let num1=50, num2=20;
let numbertest= 19;
if(numbertest>=50 && numbertest>=20){

    console.log("El numero se encuentra entre 50 y 20");
}
else{
    console.log("El  numero no se encuentra entre 50 y 20");
}

//  || or = solo si alguno de los 2 son true, devuelve true. //

let vacaciones = true, descansoday=false;
if(vacaciones|| descansoday){
    console.log("Se sale de joda");

}
else{
    console.log("No se sale uwu");
}

// OPERADOR TERNARIO //

let testnumber= 24;
let resultado = (testnumber%2==0) ? "Es divisible por 2" : "No es divisible por dos"
console.log(resultado);


// Convertir tipo de dato String A Number //

let añoultimacojida = "2022";
let _lolero= Number(añoultimacojida);
let virgen=2002;
let _testvirgen = (_lolero>virgen) ? "No sos virgen lolero" : "Jugas yummi";

console.log(_testvirgen);
