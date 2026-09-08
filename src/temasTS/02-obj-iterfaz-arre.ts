// objetos, interfaces y arreglos como 

// INTERFAZ  ===========================================
// interfaz - clase sin tantas caracteristicas
// tambien puede cntener objetos, interfaces etc
interface IAlumno
{
    nombre:string,
    apellidos:string,
    edad:number,
    email:string
    nota?:number
}

// OBJETOS  ===========================================
// contruir la clase desde que se declara
const alumno:IAlumno = 
    {
        nombre:'Julia Paola',
        apellidos:'Páramo García',
        edad:21,
        email:'julia@ejemplo.com',
    } 

console.table(alumno)


// ARREGLOS  ============================================
let mascotas = ['perro', 'gato', 'tortuga']
console.log(mascotas)

mascotas[1] = "nuevoGato"
console.log(mascotas)

mascotas.push('raton')
console.log(mascotas)

// Arreglo que admite tanto letras como numeros
let tem:(number|string)[]=[]
tem.push(11)
tem.push('once')
console.log(tem)