


console.log("Aprendiendo JavaScript");//Imprimir en consola JavaScript

console.log(Math.random());

let edad;
let age = 20;
let mensaje = "Hola Usuarios ";
var mensaje2 = "20"

console.log(mensaje2.length);

let verdadero = true;
let falso = false;

if (age == mensaje2) {
    console.log("tienen el mismo contenido");
}


const moneda = 'COP';
const NumeroColumnas = 4;

//Función normal

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

console.log("La suma de los numeros es:" + sumar(3, 4))

//Función Anonima

const Hola = function () {
    return 'Hola'
}

//Función Flecha

const sum = (numero1, numero2) => {
    return numero1 + numero2;
}

//No son necesarios los paretensis cuando solo es un parametro

const multix2 = numero => {

    return numero * 2;
}

console.log("La multip de los numeros es:" + multix2(2));


console.log(">---------------------Funciones creadas---------------------<");

//Practica con funciones

//Función sin parametros

const Division = () => {

    let div;
    div = 4 / 2;
    return div;
}

console.log("4 dividido 2 da como resultado = " + Division());

//Función con 1 parametro

const apellido = apellido => {
    return apellido;
}

console.log("El apellido de Andrés es: " + apellido("Gil"));

//Función con más de 1 parametro

let num1 = 3, num2 = 4;

const migue = (num1, num2) => {
    return num1 + num2;
}

console.log("Papi, eso " + num1 + " Más " + num2 + " eso le da " + migue(num1, num2));


let numeros = [1, 2, 3, 4, 5, 6]

//Ingresar dato adicional

numeros.push(10);

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);

}

//Saca el ultimo elemento

numeros.pop();

//Función flecha con array

const ARRAY = () => {

    for (let i = 0; i < 5; i++) {

        numeros.push(Math.floor(Math.random() * 100))

    }
}

ARRAY();

console.log(numeros.length);

for (let i = 0; i < numeros.length; i++) {
    console.log("El array modificado es: " + numeros[i]);
}


let sumita =(number) => {return number +5;}

let f = sumar;

console.log(f(5));
console.log(sumita(5));

/** callback functions
 * 
 * Se trata de enviarle como parametro de entrada a una func:
 * otra func*/

console.log("-----------Es par regresando un bool-----------");

const esPar = (numero) =>{
    return numero%2 ==0;//Regresa un boolean
}

const Validadero =(numero,callbackFn)=>{

    const esPar = callbackFn(numero);
    console.log("El número es entero?: "+esPar);
}

Validadero(9,esPar);

const divX2 = (numerillo) =>{ return numerillo/2;}

const dividenum =(numerillo,callbackfn) =>{

    return callbackfn(numerillo);
}

console.log("Dividido x2");
console.log(dividenum(10,divX2));

const numeras = [1,2,3,20,893,452];
let numeras2 = [1,2,3,20,893,452];

//Reducir()

console.log("-------------Reducción por suma-------------");

const SumaValores = numeras2.reduce ((acumulador,valoractual) => {

        return acumulador+valoractual;

})

console.log(SumaValores);

//.foreach()

console.log("-------------ForEach-------------");

const fnDos = numeras2.forEach(number => {

    console.log(number);

})

//.filter()

console.log("-------------Filter-------------");

const fnTres = numeras2.filter(number =>{
    return number>10;
})

console.log(fnTres);

//.MAP()

console.log("-------------Map-------------");

const nombresPerson = ["Juan","Pedro","Pablo","Andrés"];

const ANUNCIOS = nombresPerson.map(miembro =>{

    return miembro+" Se ha unido al grupo";
});

console.log(ANUNCIOS);


console.log("");
console.log("-------------Actividad-------------");

//Callback function

const multip = numerom =>{

return numerom*2
}

const Result = (numerom,callbackFn)=>{

    const multip = callbackFn(numerom)
    console.log("El resultado de "+numerom+" multiplicado por 2 es: "+ multip);
}

Result(10,multip)

console.log("----------Array-----------");

const edades = [15,16,17,18,19,20,21];

const edades1 = edades.filter(numeraco =>{
    return numeraco>= 18;
})

console.log("En Colombia eres mayor de edad a partir de estas edades: "+ edades1);