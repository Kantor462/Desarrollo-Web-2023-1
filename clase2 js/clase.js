// Objetos

const persona = {

    primernombre : "juan",
    apellido : "Perez",
    edad : 22,
    documento : 5612,
    Caracteristicas : {
        ColorCabello: 'Rojo',
        etnia: 'Indoeuropeo',
        idioma: 'Español'
    },
    //Metodo
   Saludar:function(){
    return `Hola ${this.primernombre} ${this.apellido}`
   }
}
// Accediendo al método
console.log(persona.Saludar());

// acceder a una propiedad. Forma 1
console.log(persona.apellido);

// Acceder a una propiedad.Forma 2
console.log(persona["primernombre"]);


// Clases
class Persona {
    constructor(primernombreUser,apellidoUser){
        this.primernombreUser = primernombreUser;
        this.apellidoUser = apellidoUser;
    }

    // Saludar
    saludarPersona(){
        return `Hola ${this.primernombreUser} ${this.apellidoUser}`
    }
}

// usar clase para construir una persona(Objeto)
let Personita = new Persona("Carlos","Cantor");
Personita.primernombreUser ='Miguel';
Personita.apellidoUser = 'Cardena';
console.log(Personita)
console.log(Personita.saludarPersona());

//Herencia
class Animales{
    constructor(nombreA,edadA,sonido){
    this.nombreA = nombreA;
    this.edadA = edadA;
    this.sonido = sonido;
    }

    sonido(){
        return`${this.nombreA} hace el sonido: ${this.sonido}`;
    }
}

// Herencia. Palabra clave Extends
class Gatos extends Animales{

    // constructor de la clase gatos

    constructor(nombreA,edadA,sonido,cazador){
        super(nombreA,edadA,sonido)
        this.cazador = cazador;
    }

    maullar(){
        return `yo puedo hacer el sonido ${this.sonido}`
    }
}

// Crear un animal, especificamente un gato

let gato = new Gatos ('Albert',52,"Meow",true)

console.log(gato);

// 1.Tarea, Crear objeto que tenga minimo dos metodos... además debe
//  tener una propiedad que sea un objeto

// 2.Crear una clase que herede de otra . debe poseer minimo 3 propiedades
// para el constructor

// 3.crear una funcion tipo flecha que haga uso de la clase construida
// y el objeto declarado

console.log("---------------------Actividad---------------------");
console.log("");

// Primer Punto
const restautante ={
    NombreR :'Ferxxo´s',
    sedes: 2,
    CaracteristicasR: {
        nit: '151.91282.09-8',
        Dirección: 'Cra 54 #33-12',
        Especialidad: 'Comida Rapida', 
    },

    // Metodos
    NombreRe:function(){
        return `Nombre: ${this.NombreR} Sedes: ${this.sedes}`
    },

    Carac:function(){
        return `Nit: ${this.CaracteristicasR.nit} Direccion: ${this.CaracteristicasR.Dirección}
        Especialidad: ${this.CaracteristicasR.Especialidad}`
    }
}
console.log("1.");
console.log(restautante.NombreRe());
console.log(restautante.Carac());

// Segundo Punto
class Restaurantes{
    constructor(nombreRES,sonido){
    this.nombreA = nombreA;
    this.edadA = edadA;
    this.sonido = sonido;
    }

    sonido(){
        return`${this.nombreA} hace el sonido: ${this.sonido}`;
    }
}

// Herencia. Palabra clave Extends
class Gatos extends Animales{

    // constructor de la clase gatos

    constructor(nombreA,edadA,sonido,cazador){
        super(nombreA,edadA,sonido)
        this.cazador = cazador;
    }

    maullar(){
        return `yo puedo hacer el sonido ${this.sonido}`
    }
}