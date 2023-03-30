/**
 * Realizar 2 modulos 
 * 
 * El primer modulo contiene:
 * debe tener una clase que hereda de otra
 * un objeto que dentro de sus propiedades tenga otro objeto*/

class Animales{
    constructor(nombreA,edadA,especieA){
    this.nombreA = nombreA;
    this.edadA = edadA;
    this.especieA = especieA;
    }

    especie(){
        return`${this.nombreA} Es un: ${this.especieA}`;
    }
}

// Herencia. Palabra clave Extends
class tipoA extends Animales{

    // constructor de la clase gacela

    constructor(nombreA,edadA,especieA,cazador){
        super(nombreA,edadA,especieA)
        this.cazador = cazador;
    }
}

//Objeto con otro objeto dentro

const Habitat ={
    nombre : "Bosque",
    existe : true,
    CaracteristicasH :{
        humedad : "alta",
        animales: 'Variado',
        arboles: true,
        desierto: false,
    },
}

export{tipoA,Habitat}