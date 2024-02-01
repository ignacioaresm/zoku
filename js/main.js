document.addEventListener("DOMContentLoaded", function () {
    const contenedorProductos = document.getElementById("products");
    const contenedorCarrito = document.getElementById("cart");
    const contenedorTotal = document.getElementById("total");
    const filtroPrecio = document.getElementById("priceFilter");
  
    let carrito = [];
  
    // Productos
    const productos = [
      { id: 1, nombre: "Evangelion 01", precio: 5500, imagen: "../img/manga1.png" },
      { id: 2, nombre: "Saint Seiya 06", precio: 12500, imagen: "../img/manga2.png" },
      { id: 3, nombre: "Tokyo Revengers 13", precio: 5500, imagen: "../img/manga3.png" },
      { id: 4, nombre: "Jujutsu Kaisen 01", precio: 8000, imagen: "../img/manga4.png" },
      { id: 5, nombre: "Akira 04", precio: 12500, imagen: "../img/manga5.png" },
      { id: 6, nombre: "Attack on Titan 01", precio: 4300, imagen: "../img/manga6.png" }
    ];
  
    // Función para renderizar productos
    function renderizarProductos() {
      contenedorProductos.innerHTML = "";
      const productosFiltrados = filtrarProductos(productos);
      productosFiltrados.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
            <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
          </div>`;
        contenedorProductos.appendChild(card);
      });
    }
  
    // Filtrar
    function filtrarProductos(productos) {
      const valorFiltro = filtroPrecio.value;
      let productosFiltrados = productos.slice();
      if (valorFiltro === "asc") {
        productosFiltrados.sort((a, b) => a.precio - b.precio);
      } else if (valorFiltro === "desc") {
        productosFiltrados.sort((a, b) => b.precio - a.precio);
      }
      return productosFiltrados;
    }
  
    // Agregar producto al carrito
    window.agregarAlCarrito = function (idProducto) {
      const producto = productos.find(p => p.id === idProducto);
      carrito.push(producto);
      renderizarCarrito();
      actualizarTotal();
    };
  
    // Función para renderizar carrito
    function renderizarCarrito() {
        contenedorCarrito.innerHTML = "";
        carrito.forEach(item => {
        const li = document.createElement("li");
        const nombreProducto = document.createElement("span");
        nombreProducto.textContent = item.nombre;
        nombreProducto.classList.add("nombre-producto");
        const removeButton = document.createElement("button");
        removeButton.innerHTML = '<span class="icono-x">&times;</span>'; 
        removeButton.classList.add("btn", "btn-eliminar"); 
        removeButton.onclick = () => eliminarDelCarrito(item.id);
        li.appendChild(nombreProducto); 
        li.appendChild(removeButton);
        contenedorCarrito.appendChild(li);
        });
    }
  
  
    // Sacar producto del carrito
    function eliminarDelCarrito(idProducto) {
      carrito = carrito.filter(item => item.id !== idProducto);
      renderizarCarrito();
      actualizarTotal();
    }
  
    // Actualizar total
    function actualizarTotal() {
      const total = carrito.reduce((acc, curr) => acc + curr.precio, 0);
      contenedorTotal.textContent = `Total: $${total}`;
    }
  
    // Cambiar filtro
    filtroPrecio.addEventListener("change", function () {
      renderizarProductos();
    });
  
    // Inicializar
    renderizarProductos();
});
  