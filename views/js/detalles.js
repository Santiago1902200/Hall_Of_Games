// Datos simulados, podrían venir de una API o base de datos más adelante
const juegos = {
  Farcry: {
    titulo: "Far Cry",
    descripcion: "Un shooter de mundo abierto con paisajes exóticos y acción intensa.",
    categoria: "Acción",
    plataforma: "PC, PS5, Xbox",
    jugadores: "2M",
    imagen: "views/imgs/juegos/Farcry.jpg"
  },
  Fortnite: {
    titulo: "Fortnite",
    descripcion: "Battle royale multijugador lleno de acción y construcción.",
    categoria: "Acción",
    plataforma: "PC, PS5, Xbox, Switch",
    jugadores: "25M",
    imagen: "views/imgs/juegos/fortnite.jpg"
  },
  GTA: {
    titulo: "GTA V",
    descripcion: "Explora Los Santos en este juego de crimen, acción y mundo abierto.",
    categoria: "Aventura",
    plataforma: "PC, PS5, Xbox",
    jugadores: "10M",
    imagen: "views/imgs/juegos/gta.jpg"
  },
  Halo: {
    titulo: "Halo Infinite",
    descripcion: "Una saga épica de ciencia ficción y disparos en primera persona.",
    categoria: "Shooter",
    plataforma: "Xbox, PC",
    jugadores: "5M",
    imagen: "views/imgs/juegos/Halo.jpg"
  },
  Valorant: {
    titulo: "Valorant",
    descripcion: "FPS competitivo con habilidades únicas para cada agente.",
    categoria: "Estrategia",
    plataforma: "PC",
    jugadores: "15M",
    imagen: "views/imgs/juegos/valorant.jpg"
  }
};

// Función para obtener el valor de un parámetro en la URL por su nombre
function obtenerParametro(nombre) {
  const params = new URLSearchParams(window.location.search);
  return params.get(nombre);
}

// Se ejecuta cuando el contenido HTML está completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Obtiene el parámetro "juego" de la URL
  const nombreJuego = obtenerParametro("juego");
  // Busca el objeto del juego en el objeto "juegos"
  const juego = juegos[nombreJuego];

  // Si no existe el juego, muestra un mensaje y detiene la ejecución
  if (!juego) {
    document.body.innerHTML = "<p>Juego no encontrado</p>";
    return;
  }

  // Actualiza el contenido de la página con los datos del juego
  document.getElementById("titulo-juego").textContent = juego.titulo;
  document.getElementById("imagen-juego").src = `../${juego.imagen}`;
  document.getElementById("imagen-juego").alt = juego.titulo;
  document.getElementById("descripcion-juego").textContent = juego.descripcion;
  document.getElementById("categoria-juego").textContent = juego.categoria;
  document.getElementById("plataforma-juego").textContent = juego.plataforma;
  document.getElementById("jugadores-juego").textContent = juego.jugadores;

  // Agrega un evento al botón "Agregar a favoritos"
  document.getElementById("agregar-favoritos").addEventListener("click", () => {
    // Recupera el arreglo de favoritos del localStorage o crea uno nuevo si no existe
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    // Si el juego no está ya en favoritos, lo añade y actualiza localStorage
    if (!favoritos.includes(nombreJuego)) {
      favoritos.push(nombreJuego);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      alert(`Juego "${juego.titulo}" agregado a favoritos.`);
      // Redirige a la página de favoritos pasando el juego como parámetro
      window.location.href = `favoritos.html?juego=${nombreJuego}`;
    } else {
      // Si ya está en favoritos, muestra alerta correspondiente
      alert("Este juego ya está en tus favoritos.");
    }
  });
});
