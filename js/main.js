const productos = [
  { nombre: "manga1", precio: 4500 },
  { nombre: "manga2", precio: 4500 },
  { nombre: "manga3", precio: 4500 },
  { nombre: "manga4", precio: 6000 },
  { nombre: "manga5", precio: 6000 },
  { nombre: "manga6", precio: 6000 },
];

let carrito = []

let seleccion = prompt("Bienvenidx! ¿Deseas comprar algún Manga? (si o no)")

while(seleccion !="si" && seleccion !="no"){
  alert("Por favor ingresá si o no")
  seleccion = prompt("¿Deseas comprar algún Manga? (si o no)")
}

if (seleccion == "si"){
  alert("Estos son los Mangas que tenemos en stock")
  let stockProductos = productos.map((productos) => productos.nombre + " " + "$" + productos.precio);
  alert(stockProductos.join(", ")) 
} else if (seleccion == "no"){
  alert("Gracias por visitar nuestra tienda, te esperamos la próxima ;)")
}

while(seleccion != "no"){
  let producto = prompt ("Agrega un Manga a tu carrito")
  let precio = 0

  if(producto == "manga1" || producto == "manga2" || producto == "manga3" || producto == "manga4" || producto == "manga5" || producto == "manga6"){
    switch(producto){
      case "manga1":
        precio = 4500;
      break;
      case "manga2":
        precio = 4500;
      break;
      case "manga3":
        precio = 4500;
      break;
      case "manga4":
        precio = 6000;
      break;
      case "manga5":
        precio = 6000;
      break;
      case "manga6":
        precio = 6000;
      break;
      default:
      break;
    }
    let unidades = parseInt(prompt("Por favor indicá la cantidad de unidades"))
    carrito.push({producto, unidades, precio})
  } else{
    alert("No contamos con stock de ese Manga")
  }
  seleccion = prompt("¿Querés agregar otro producto? (si o no)")
  while(seleccion !="si" && seleccion !="no"){
    alert("Por favor ingresá si o no")
    seleccion = prompt("¿Querés agregar otro producto? (si o no)")
  }
  while(seleccion == "no"){
    alert("¡Gracias por tu compra!")
    carrito.forEach((carritoTotal) => {
      console.log(`Producto: ${carritoTotal.producto}, Unidades: ${carritoTotal.unidades}, Precio por unidad: $${carritoTotal.precio}, Total por producto: $${carritoTotal.unidades * carritoTotal.precio}`)
    })
  break;
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por la compra es: $${total}`)
alert(`El total a pagar es: $${total}`)