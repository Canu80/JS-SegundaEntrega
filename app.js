//VARIABLES

let usuario = "";
let mascota = "";
let orden = "";
let disponible = "";
let respuesta = 0;
let peso = 0;
let stock = 0;

// Mis productos

const productos = [
  {
    animal: "gato",
    nombre: "bolsa de alimento para gatos",
    peso: "3kg",
    precio: 750,
    stock: 8,
  },
  {
    animal: "gato",
    nombre: "bolsa de alimento para gatos",
    peso: "10kg",
    precio: 1950,
    stock: 12,
  },
  {
    animal: "perro",
    nombre: "bolsa de alimento para perros",
    peso: "5kg",
    precio: 850,
    stock: 8,
  },
  {
    animal: "perro",
    nombre: "bolsa de alimento para perros",
    peso: "15kg",
    precio: 2350,
    stock: 15,
  },
];




// Interación con el usuario

usuario = prompt(`¡Bienvenidos a PET, nuestra tienda online!

¿Cuál es tu nombre?
`);
mascota = prompt(
  `Hola ` +
    usuario +
    ` ,gracias por elegirnos.
Cuéntanos, ¿qué mascota tienes?
`
);
mascota = mascota.toLowerCase();


const disponibilidad = productos

  .filter(function (producto) {
    return producto.animal === mascota;
  })

  .map(function (producto) {
    return producto.nombre + " de " + producto.peso;
  });
  
  pregunta ();

  function pregunta () {
    if (mascota === "perro"){
    do {
    disponible = prompt(
      usuario +
      ' , para ' +
      mascota +
      's tenemos disponible:' +
      disponibilidad[0] +
      ' y ' +
      disponibilidad[1] +
      '¿de cuántos kilos quieres llevar?'      
  );
  if (disponible.includes("15")) {
    peso = 15;
    respuesta = true;
  
  } else if (disponible.includes("5")) {
    peso = 5;
    respuesta = true;
  } else if (respuesta!= true){
  pregunta ();
  }
    }  while (respuesta!= true);
  } else   if (mascota === "gato"){
    do {
    disponible = prompt(
      usuario +
      ' , para ' +
      mascota +
      's tenemos disponible:' +
      disponibilidad[0] +
      ' y ' +
      disponibilidad[1] +
      '¿de cuántos kilos quieres llevar?'      
  );
  if (disponible.includes("10")) {
    peso = 10;
    respuesta = true;
  
  } else if (disponible.includes("3")) {
    peso = 3;
    respuesta = true;
  } else if (respuesta!= true){
  pregunta ();
  }
    }  while (respuesta!= true);
  }
  }
  

  /*
  disponibilidad = productos

  .filter(function (producto) {
    return producto.animal === mascota && producto.peso === peso;
  })

  .map(function (producto) {
    return stock=producto.stock;
  });

  


pedido = prompt (`Muy bien ` + usuario + `elegiste una bolsa de `
+ peso + `kilos, para ` + mascota + `s. Quedan disponibles:`
+ stock + ` ¿Cuántas quieres llevar?`);
*/


