const url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=MXN";
// -------------------- Selectores del DOM  ------------------------------------------------------------
let casas = document.querySelectorAll(".casa");
let botonesDelete = document.querySelectorAll(".delete");
let botonComprar = document.getElementById("buy");
let botonClear = document.getElementById("clear");
let total = document.getElementById("total");
let contenedor = document.getElementById("contenedor");
let cant = document.getElementsByClassName("cantidad");
// ----------------------------- COMIENZO DEL CODIGO --------------------------------------------
let carro;
/* Revisamos que no haya un carrito guardado en storage*/
if (sessionStorage.carro == undefined) {
  carro = new Carrito();
} else {
  let sessionStorageCarro = JSON.parse(sessionStorage.carro);
  carro = new Carrito(
    sessionStorageCarro.name,
    sessionStorageCarro.items,
    sessionStorageCarro.total
  );
  actualizar();
}
// Este Loop itera por cada objeto dentro del array "baseDatos" y extrae los valores de las propiedades : titulo / src / precio. Luego asigna dichas propiedades a cada  selector con la clase .casa, siendo el primer hijo titulo, el segundo src y el tecero precio.
for (let i = 0; i < baseDatos.length; i++) {
  casas[i].children[0].textContent = baseDatos[i].titulo;
  casas[i].children[1].src = baseDatos[i].src;
  casas[i].children[2].textContent = `$${baseDatos[i].precio}`;
  casas[i].children[3].addEventListener("click", () => {
    let nuevoCasa = document.createElement("div");
    comprar(baseDatos[i]);
  });
}
// Selecciono el boton Buy y le agrego el evento click con jquery
$("#buy").click(function () {
  carro.buyCasas();
});
// Selecciono el boton clear y le agrego el evento click con jquery.
$("#clear").click(function () {
  carro.clearCarrito();
});
// FUNCIONES
function comprar(casa) {
  carro.addCasa(casa);
}

function eliminar(casa) {
  carro.removeCasa(casa);
}
function agregarDOM(casaCarrito) {
  let nuevoDiv = document.createElement("div");
  let agregarProductoACarro = `
 <img src="${casaCarrito.src}" alt="">
 <button class=" less btn btn-info"><</button>
 <p class="quantity">x${casaCarrito.cantidad}</p>
 <button class=" more btn btn-info">></button>
 <p class="precio">$${casaCarrito.precio}</p>
 <button class="btn btn-danger delete">Delete</button>
 `;
  nuevoDiv.innerHTML = agregarProductoACarro;
  nuevoDiv.classList.add("producto-carrito");
  contenedor.appendChild(nuevoDiv);
  nuevoDiv
    .getElementsByClassName("less")[0]
    .addEventListener("click", function (event) {
      if (casaCarrito.cantidad > 1) {
        casaCarrito.cantidad--;
        casaCarrito.stock++;
        nuevoDiv.querySelector(
          ".quantity"
        ).textContent = `x ${casaCarrito.cantidad}`;
        nuevoDiv.querySelector(".precio").textContent = `x ${
          casaCarrito.cantidad * casaCarrito.precio
        }`;
        actualizar();
      } else return;
    });

  nuevoDiv
    .getElementsByClassName("more")[0]
    .addEventListener("click", function (event) {
      event.target;
      if (casaCarrito.stock > 0) {
        casaCarrito.cantidad++;
        casaCarrito.stock--;
        nuevoDiv.querySelector(
          ".quantity"
        ).textContent = `x ${casaCarrito.cantidad}`;
        nuevoDiv.querySelector(".precio").textContent = `x ${
          casaCarrito.cantidad * casaCarrito.precio
        }`;
        actualizar();
      } else alert("Excede metros cuadrados de proyecto posible");
    });
  nuevoDiv
    .getElementsByClassName("delete")[0]
    .addEventListener("click", function (event) {
      let botonDeleteApretado = event.target;
      botonDeleteApretado.parentElement.remove();
      eliminar(casaCarrito);
    });
  nuevoDiv.getElementsByClassName(
    "quantity"
  )[0].innerText = `X${casaCarrito.cantidad}`;
}

function actualizar() {
  total.innerText = `Total: $${carro.precioTotal()}`;
  document.getElementsByClassName("quantity")[0];
  sessionStorage.carro = JSON.stringify(carro);
  sessionStorage.baseDatos = JSON.stringify(baseDatos);
  console.log(carro);
}
