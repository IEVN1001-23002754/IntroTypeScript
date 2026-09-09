interface Reproductor
{
    volumen:number,
    segundo:number,
    cancion:string,

    // una propiedad de una interfaz sea su propoedad a la vez
    detalles:Detalles
}

interface Detalles
{
    autor:string,
    anio:number
}

const reproductor:Reproductor=
{
    volumen:90,
    segundo:36,
    cancion:"High On Life",
    detalles:{
        autor:"Martin Garrix",
        anio:2018
    }
}

// ==============================================================================
// ==============================================================================

console.log("El volumen actual es: ", reproductor.volumen);
console.log("El segundo actual es: ", reproductor.segundo);
console.log("La cancion actual es: ", reproductor.cancion);

// referenciando al padre
console.log("El autor actual es: ", reproductor.detalles.autor);
console.log("El anio actual es: ", reproductor.detalles.anio);

// desestructuracion
const{volumen,segundo,cancion,detalles} = reproductor
const{autor,anio} = detalles
console.log("Desestructuracion - El volumen actual es: ",volumen);
console.log("Desestructuracion - El segundo actual es: ",segundo);
console.log("Desestructuracion - El autor actual es: ",autor);
console.log("Desestructuracion - El anio actual es: ",anio);

// ==============================================================================
// desestructuracion del arreglo
const personajes:string[]=['Personaje1', 'Personaje2', 'Personaje3', 'Personaje4']
console.log(personajes[1])

const[p1,,,p2] = personajes
console.log(p2)