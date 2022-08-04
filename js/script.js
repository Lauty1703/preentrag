
let heladoCrema = 0;
let heladoDulce = 0;
let heladoFrutilla = 0;
let heladoTramontana = 0;
let heladoDurazno = 0;
let heladoOreo = 0;
let total = 0;
let precioCrema = 2500;
let precioDulce = 2000;
let precioFrutilla = 1500;
let precioTramontana = 1850;
let precioDurazno = 1990;
let precioOreo = 2000;

const sumar = (a, b) => a + b;
const multi = (a, b) => a * b;
const div = (a, b) => a / b;
const iva = (a) => a * 0.21;

let cantidadProd = 0;
let nav;
let nombre = prompt("Ingrese su nombre:");
alert(`${nombre} presione enter para poder ver las opciones que tenemos para vos`);
do {
    let elegirProd;
    let unidades;
    nav = parseInt(prompt(`${nombre} en que te podemos ayudar\n1-agregar algo al carrito\n2-Ver el carrito y teminar la compra\n3-Ingresar/ cargar productos\n4-Salir`)
    );
    switch (nav) {
        case 1:
            while (elegirProd != 7) {
                elegirProd = parseInt(
                    prompt(
                        `Que marca y sabor agregamos al carrito\n====================================\n1-helado de crema de 1 kilo $2000\n2-helado de dulce de lechede 1 kilo $2500\n3-helado de frutilla de 1 kilo $2000\n4-helado de tramontana de 1 kilo $1500\n5-helado de oreo 1 kilo $2800\n6-helado de durazno de 1 kilo $1800\n7-Salir`
                    )
                );
                switch (elegirProd) {
                    case 1:
                        unidades = parseInt(prompt("Cuantos helado de crema de 1 kilo quiere agregar al carrito"));
                        heladoCrema = sumar(heladoCrema, unidades);
                        cantidadProd = sumar(cantidadProd, unidades);
                        total = sumar(total, multi(unidades, precioCrema));
                        break;
                    case 2:
                        unidades = parseInt(prompt("Cuantos helado de dulce de lechede 1 kilo quiere agregar al carrito"));
                        heladoDulce = sumar(heladoDulce, unidades);
                        cantidadProd = sumar(cantidadProd, unidades);
                        total = sumar(total, multi(unidades, precioDulce));
                        break;
                    case 3:
                        unidades = parseInt(prompt("Cuantos helado de frutilla de 1 kilo quiere agregar al carrito"));
                        heladoFrutilla = sumar(heladoFrutilla, unidades);
                        cantidadProd = sumar(cantidadProd, unidades);
                        total = sumar(total, multi(unidades, precioFrutilla));
                        break;
                    case 4:
                        unidades = parseInt(prompt("Cuantos helado de tramontana de 1 kilo quiere agregar al carrito"));
                        heladoTramontana = sumar(heladoTramontana, unidades);
                        cantidadProd = sumar(cantidadProd, unidades);
                        total = sumar(total, multi(unidades, precioTramontana));
                        break;
                    case 5:
                        unidades = parseInt(prompt("Cuantos helado de oreo 1 kilo quiere agregar al carrito"));
                        heladoOreo = sumar(heladoOreo, unidades);
                        cantidadProd = sumar(cantidadProd, unidades);
                        total = sumar(total, multi(unidades, precioOreo));
                        break;
                    case 6:
                        unidades = parseInt(prompt("Cuantos helado de durazno de 1 kilo quiere agregar al carrito"));
                        heladoDurazno = sumar(heladoDurazno, unidades);
                        cantidadProd = sumar(cantidadProd, unidades);
                        total = sumar(total, multi(unidades, precioDurazno));
                        break;
                    default:
                        break;
                }
            }
            break;
        case 2:
            while (elegirProd != 1) {
                elegirProd = parseInt(prompt(`El precio total de todos los productos puestos al carrito es:$${total}\n======================================\n1-Seguir Comprando\n2-Finalizar compra`));
                switch (elegirProd) {
                    case 2:
                        unidades = parseInt(prompt(
                            `Usted esta llevando ${cantidadProd} de Productos por $${total}
                                \nhelado de crema de 1 kilo ${heladoCrema}:$${multi(heladoCrema, precioCrema)}
                                \nhelado de dulce 1 kilo ${heladoDulce}: $${multi(heladoDulce, precioDulce)}
                                \nhelado de frutilla 1 kilo ${heladoFrutilla}: $${multi(heladoFrutilla, precioFrutilla)}
                                \nhelado de tramontana 1 kilo ${heladoTramontana}: $${multi(heladoTramontana, precioTramontana)}
                                \nhelado de oreo 1 kilo ${heladoOreo}: $${multi(heladoOreo, precioOreo)}
                                \nhelado de durazno 1 kilo ${heladoDurazno}: $${multi(heladoDurazno, precioDurazno)}
                                \niva: $${iva(total).toFixed(2)}
                                \nTotal con iva $${sumar(total, iva(total)).toFixed(2)}
                                \nPresione:\n1-Realizar la compra en un pago
                                \n2-Realizar la compra en 6 cuotas con 10% de interes
                                \n3-Realizar la compra en 12 cuotas con 25% de interes` )
                        );

                        switch (unidades) {
                            case 1:
                                alert(
                                    `Su total mas iva es de $${sumar(total, iva(total)).toFixed(2)} gracias por confiar en nosotros ${nombre}\n`
                                );
                                break;
                            case 2:
                                alert(`Su total es de 6 cuotas de $${div(
                                    sumar(total, sumar(iva(total), multi(total, 0.1))),
                                    6
                                ).toFixed(2)} gracias por confiar en nosotros ${nombre}\n`);
                                break;
                            case 3:
                                alert(`Su total es de 12 cuotas de $${div(sumar(total, sumar(iva(total), multi(total, 0.25))), 
                                    12
                                ).toFixed(2)} gracias por confiar en nosotros ${nombre}\n`);
                                break;
                            default:
                                break;
                        }
                    default:
                        break;
                }
                break;
            }
        case 3:

            class Productos {
                constructor(nombre, precio, cantidad) {
                    this.nombre = nombre.toUpperCase();
                    this.precio = precio;
                    this.cantidad = cantidad;
                }
            }

            function guardarProductos() {
                let carrito = [];
                let cantProductos = parseInt(prompt("Cuantos Productos necesita registrar"));

                for (let index = 1; index <= cantProductos; index++) {
                    let nombre = prompt("Ingrese el nombre del producto: " + index);
                    let precio = parseFloat(prompt("Ingrese el precio"));
                    let cantidad = prompt("Ingrese la cantidad de stock");
                    let producto1 = new Productos(nombre, precio, cantidad);
                    carrito.push(producto1);

                }
                return carrito;
            }

            function mostrarProductos(carrito) {
                for (const componente of carrito) {
                    console.log(componente);
                    alert(`El componente ingresado\nNombre:${componente.nombre}\nPrecio:$${componente.precio}\nStock:${componente.cantidad}` );
                }
            }
            function mostrar() {
                let carrito = guardarProductos();
                mostrarProductos(carrito);
            }
            mostrar();
        default:
            break;
    }
} while (nav != 4);





