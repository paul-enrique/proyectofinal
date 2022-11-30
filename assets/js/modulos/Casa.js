// Clase Casa con su constructor -------------------------------------------------------------------------
class Casa {
  constructor(id, autor, titulo, año, sistema, stock, precio, src) {
    this.id = id;
    this.autor = autor;
    this.titulo = titulo;
    this.año = año;
    this.sistema = sistema;
    this.stock = stock;
    this.precio = precio;
    this.src = src;
  }
  getStock() {
    if (this.stock > 0) {
      return true;
    } else {
      return false;
    }
  }
}
