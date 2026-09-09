import { type Producto, calcularISV_2 } from './05-desestructuracion-funciones.ts';


const carrito:Producto[] = 
[
    {
        desc:'Telefono 1',
        precio: 2470,
    },

    {
        desc:'Telefono 2',
        precio: 5490,
    },

    {
        desc:'Telefono 3',
        precio: 3840,
    }
]

const [total,isv] = calcularISV_2(carrito)
console.log("Total del carrito: ",total)
console.log("ISV del carrito: ",isv)