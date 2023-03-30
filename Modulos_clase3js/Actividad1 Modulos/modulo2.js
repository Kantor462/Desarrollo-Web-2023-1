/* 
 * El segundo modulo contiene:
 * importación de la clase y el objeto
 * funcion tipo flecha que use la clase y objetos importados
 * */

import { tipoA, Habitat } from "./Modulo1.js";

const animales = () => {

    let gacela = new tipoA('Gacela', 32, 'Mamifero', 'Felinos')

    return gacela;

}

console.log(animales());

const ImpHabitat = () => {
    return `El Habitat ingresado es: ${Habitat.nombre} Existe: ${Habitat.existe}
Humedad: ${Habitat.CaracteristicasH.humedad}
Animales: ${Habitat.CaracteristicasH.animales}
Arboles: ${Habitat.CaracteristicasH.arboles}
Desierto: ${Habitat.CaracteristicasH.desierto}`
}

console.log(ImpHabitat());

/* Oros Add:
 * Tercer modulo que contenga una función tipo flecha, que manipule arreglos
 * con los metodos de arreglos. Debe tener como parametros de entrada el arreglo
 * y una callback funtion debe poderse exportar
 */
