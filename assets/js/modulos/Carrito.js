class Carrito {
  constructor(name = "Usuario", items = [], total = 0) {
    (this.name = name), (this.items = items), (this.total = total);
  }

  getIndex(casa) {
    let index = this.items.indexOf(casa);
    return index;
  }

  addCasa(casa) {
    if (casa.getStock()) {
      if (!this.items.some((e) => e.titulo === casa.titulo)) {
        let casaCarrito = Object.assign({}, casa);
        casaCarrito.cantidad = 1;
        casaCarrito.stock--;
        this.items.push(casaCarrito);
        agregarDOM(casaCarrito);
      } else if (this.items.some((e) => e.titulo === casa.titulo)) {
      }
    } else {
      alert("No cotizamos por el momento " + casa.titulo);
    }
    actualizar();
  }

  removeCasa(casa) {
    this.items.splice(this.getIndex(casa), 1);
    actualizar();
  }

  precioTotal() {
    let totalCarrito = 0;
    this.items.forEach((casaCarrito) => {
      totalCarrito += casaCarrito.precio * casaCarrito.cantidad;
    });
    this.total = totalCarrito;
    return totalCarrito;
  }

  clearCarrito() {
    this.items = [];
    contenedor.innerHTML = "";
    actualizar();
    return this.items;
  }

  buyCasas() {
    $.get(url, function (res, status) {
      if (status === "success") {
        let valorDolar = parseFloat(res[1].casa.venta);
        alert(`Su total en dolares fue de: ${this.total / valorDolar}`);
        console.log(this.total);
        console.log(valorDolar);
      }
    });
    Swal.fire(
      "Su cotización esta lista",
      "Desafio Final Coderhouse JS",
      "success"
    );
    this.items = [];
    contenedor.innerHTML = "";
    actualizar();
    return this.items;
  }
}
