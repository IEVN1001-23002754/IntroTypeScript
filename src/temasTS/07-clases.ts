class Persona
{
    nombre:string
    edad:number

    // metodo que inicializa los obj de la class cuando son creados
    constructor (nombre:string, edad:number)
    {
        this.nombre = nombre
        this.edad = edad
    }

    imprimir()
    {
        console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años.`)
    }
}

// crear objeto
let persona:Persona
persona = new Persona('Julia', 21)
persona.imprimir()