// fragmento de codigo que realiza una tarea especifica
// tipos de parametros parametros que reciben y regresan

let x = 8
let y = 2


function sumar(x:number, y:number, z:number=5):number 
{
    let a=6
    let b=7
    let suma=a+b+z
    console.log('La suma de 6 + 7 es: ' + suma) // se imprime porque el console esta dentro de la funcion
    return x + y
}

// parametros opcionales o que desde el inicio tienen un valor

let resultado = sumar(3,2)
console.log(resultado)






// pasar objetos a las funciones ===============================0

// definir caracteristicas del objeto para poderlo pasar a la funcion
interface Mascotas
{
    nombre:string,
    edad:number,
    raza:string,
    sexo?:string,
    vacunado:boolean,
    mostrar:()=>void  
    // funcion tipo flecha con void que no regresa nada porque quiero que mostar solamente imprima
    // no tiene cuerpo pero va a haber una funcion
    // le pones cuerpo hasta que la uses
}

// hacer objeto
const nuevaMascota:Mascotas=
{
    nombre:"Reno",
    edad:4,
    raza:"Pastor aleman",
    vacunado:true,
    mostrar()
    {
        console.log(`La edad de ${this.nombre} es ${this.edad}`)
        // this para referenciar las propiedades el objeto actual
    }
}

// hacer funcion para pasarle el objeto
function mostrarMascota(mascota:Mascotas, s:number): void
{
    mascota.edad += s 
    console.log(mascota)
    console.log(mascota.mostrar())
}

mostrarMascota(nuevaMascota,3)