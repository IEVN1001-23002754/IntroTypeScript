export interface Producto
{
    desc:string,
    precio:number
}

const telefono:Producto=
{
    desc:"Nokia A1",
    precio:1500
}

const tablet:Producto=
{
    desc:"iPad Air",
    precio:13500
}

function calcularISV(productos:Producto[]):number 
{
    let total = 0;
    for(const producto of productos)
    {
        total += producto.precio;
    }   
    return total * 0.15;
}

const articulos = [telefono,tablet];
const isv = calcularISV(articulos);
console.log("El ISV es de:",isv)

// ==============================================================================
// desestructuracion de funciones
export function calcularISV_2(productos:Producto[]):[number,number]
{
    let total = 0;
    for(const producto of productos)
    {
        // return total * 0.15;
        total += producto.precio;
    }   
    return [total, total * 0.15];
}

const [total,isv2] = calcularISV_2(articulos);
// const isv = calcularISV(articulos);

console.log("Desestructuracion de funciones - El total es de:",total)
console.log("Desestructuracion de funciones - El ISV es de:",isv2)

