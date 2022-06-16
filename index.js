// Funcion para permitir ingreso a mayores de edad.
let permitirIngreso = prompt("Si usted es mayor de edad ingrese: SI")
while(permitirIngreso != "SI"){
    alert("Usted ingreso: " + permitirIngreso + ". Puede ingresar al sitio.");
    permitirIngreso = prompt("Si no es mayor de edad no puede ingresar al sitio");
}
// Funcion para calcular precio de un producto con descuento e iva. Mas adelante agregare una pestaña para hacer compras en la pagina.
const suma = (a,b) => a + b 
const resta = (a,b) => a - b

const iva = y => y * 0.21
let precioCalco = 500
let descuento = 75

let precioNuevoCalco = resta(suma(precioCalco, iva(precioCalco)), descuento )
    console.log (precioNuevoCalco)

class calco {
    constructor (nombre , precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    verProducto () {
        return this.nombre;
    }
}    

const calcoUno = new calco ('Calcos tradi' , 500);
const calcoDos = new calco ('Calcos mandalas' , 500);
const calcoTres = new calco ('Calcos Black Work', 550);
const calcosCuatro = new calco ('Calcos brush' , 450);

class detallePedido {
    constructor (calco , cantidad){
        this.calco = calco;
        this.cantidad = cantidad;
    }
    calcularSubTotal (){
        let subTotal = this.calco.precio * this.cantidad
        return subTotal;
    }
    mostrarDetalle(){
        return '--' + this.cantidad + 'x' + this.calco.verProducto();
    }
}

const detallePedido1 = new detallePedido (calcoUno, 4);
const detallePedido2 = new detallePedido (calcoDos, 3);
const detallePedido3 = new detallePedido (calcoTres, 2);
const detallePedido4 = new detallePedido (calcosCuatro, 1);

class pedido {
    constructor (fecha, detalles){
        this.fecha= fecha
        this.detalles= detalles;
    }
    calcularTotal () {
        let total = 0;
        for (const dp of this.detalles){
            total = total + dp.calcularSubTotal();
        }
        return total;
    }    
    mostrarPedido () {
        let texto = ' ';
        for (const dp of this.detalles){
            texto += dp.mostrarDetalle() + '\n'
        }
        texto += this.calcularTotal()
        return texto;      
    }
}

const array = [];
array.push (detallePedido1);
array.push (detallePedido2);
array.push (detallePedido3);
array.push (detallePedido4);

const pedido1 = new pedido (new Date(), array);

console.log (pedido1.mostrarPedido());

const inventario = [ 'Calcos tradi', 'Calcos mandalas' , 'Calcos black work', 'Calcos brush']
console.log (inventario.includes ('Calcos tradi'));
console.log (inventario.includes ('Calcos mandalas'));
console.log (inventario.includes ('Calcos Black Work'));
console.log (inventario.includes ('Calcos brush'));

