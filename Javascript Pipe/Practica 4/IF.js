let mes = 10;
let estacion="Valor desconocido";

switch (mes){
    case 1 : case 2: case 12 :
        estacion = "verano";
        break;
     case 3 : case 4: case 5: case 6:
         estacion= "otoño";
         break;
    case 7: case 8:
        estacion= "invierno";
        break;
    case 9: case 10 : case 11:
        estacion="primavera";
        break;

}
    console.log(estacion);
