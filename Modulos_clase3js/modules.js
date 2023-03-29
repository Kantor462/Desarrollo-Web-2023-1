// Modulos en javaScript

import {suma} from "./modulo2.js";

function Saludar(Nombre, apellido) {

    
    return `Hola ${Nombre} ${apellido} Bienvenido Al Paraiso. Cuentas con ${suma(3,4)} vidas`;
}

console.log(Saludar('Carlos','Cantor'));

/**
 * Realizar 2 modulos 
 * 
 * El primer modulo contiene:
 * debe tener una clase que hereda de otra
 * un objeto que dentro de sus propiedades tenga otro objeto
 * 
 * El segundo modulo contiene:
 * importación de la clase y el objeto
 * funcion tipo flecha que use la clase y objetos importados
 * 
 * Oros Add:
 * Tercer modulo que contenga una función tipo flecha, que manipule arreglos
 * con los metodos de arreglos. Debe tener como parametros de entrada el arreglo
 * y una callback funtion debe poderse exportar
 */