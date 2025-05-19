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

function obtenerParametro(nombre) {
  const params = new URLSearchParams(window.location.search);
  return params.get(nombre);
}

document.addEventListener("DOMContentLoaded", () => {
  const nombreJuego = obtenerParametro("juego");
  const juego = juegos[nombreJuego];

  if (!juego) {
    document.body.innerHTML = "<p>Juego no encontrado</p>";
    return;
  }

  document.getElementById("titulo-juego").textContent = juego.titulo;
  document.getElementById("imagen-juego").src = `../${juego.imagen}`;
  document.getElementById("imagen-juego").alt = juego.titulo;
  document.getElementById("descripcion-juego").textContent = juego.descripcion;
  document.getElementById("categoria-juego").textContent = juego.categoria;
  document.getElementById("plataforma-juego").textContent = juego.plataforma;
  document.getElementById("jugadores-juego").textContent = juego.jugadores;

  document.getElementById("agregar-favoritos").addEventListener("click", () => {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (!favoritos.includes(nombreJuego)) {
      favoritos.push(nombreJuego);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      alert(`Juego "${juego.titulo}" agregado a favoritos.`);
      window.location.href = `favoritos.html?juego=${nombreJuego}`;
    } else {
      alert("Este juego ya está en tus favoritos.");
    }
  });
});
