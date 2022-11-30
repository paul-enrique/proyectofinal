// ---------------------------- Simulando una base de datos. ------------------------------------------

let baseDatos = [];

if (sessionStorage.baseDatos == undefined) {
  baseDatos = [];

  baseDatos.push(
    new Casa(
      1,
      "FLEXO",
      "RESIDENCIAL 1",
      2022,
      "TERRENO",
      250,
      12500,
      "./assets/imgs/carousel1.jpeg"
    )
  );
  baseDatos.push(
    new Casa(
      2,
      "FLEXO",
      "RESIDENCIAL 2",
      2022,
      "TERRENO",
      300,
      13500,
      "./assets/imgs/carousel2.jpeg"
    )
  );
  baseDatos.push(
    new Casa(
      3,
      "FLEXO",
      "RESIDENCIAL 3 ",
      2023,
      "TERRENO",
      400,
      16000,
      "./assets/imgs/carousel3.jpeg"
    )
  );
  baseDatos.push(
    new Casa(
      4,
      "FLEXO",
      "COMERCIAL 1",
      2023,
      "TERRENO",
      1000,
      18000,
      "./assets/imgs/casa2.jpeg"
    )
  );
  baseDatos.push(
    new Casa(
      5,
      "FLEXO",
      "COMERCIAL 2",
      2024,
      "TERRENO",
      2000,
      19000,
      "./assets/imgs/casa3.jpg"
    )
  );
  baseDatos.push(
    new Casa(
      6,
      "FLEXO",
      "COMERCIAL 3",
      2024,
      "TERRENO",
      3000,
      20000,
      "./assets/imgs/arial.jpg"
    )
  );
  baseDatos.push(
    new Casa(
      7,
      "FLEXO",
      "HOTELERO 1",
      2025,
      "TERRENO",
      40000,
      22000,
      "./assets/imgs/hotel1.jpg"
    )
  );
  baseDatos.push(
    new Casa(
      8,
      "FLEXO",
      "HOTELERO 2",
      2025,
      "TERRENO",
      30000,
      23000,
      "./assets/imgs/hotel2.jpeg"
    )
  );
} else {
  let sessionStorageBaseDatos = JSON.parse(sessionStorage.baseDatos);

  for (let i = 0; i < sessionStorageBaseDatos.length; i++) {
    sessionStorageBaseDatos[i] = new Casa(
      sessionStorageBaseDatos[i].id,
      sessionStorageBaseDatos[i].autor,
      sessionStorageBaseDatos[i].titulo,
      sessionStorageBaseDatos[i].año,
      sessionStorageBaseDatos[i].terreno,
      sessionStorageBaseDatos[i].stock,
      sessionStorageBaseDatos[i].precio,
      sessionStorageBaseDatos[i].src
    );
    console.log(sessionStorageBaseDatos);
  }

  baseDatos = sessionStorageBaseDatos;
}
