// Mismo objeto juegos (podrías importarlo o copiarlo)
const juegos = {
  Farcry: {
    titulo: "Far Cry",
    descripcion: "Un shooter de mundo abierto con paisajes exóticos y acción intensa.",
    categoria: "Acción",
    plataforma: "PC, PS5, Xbox",
    jugadores: "2M",
    imagen: "imgs/juegos/Farcry.jpg"
  },
  Fortnite: {
    titulo: "Fortnite",
    descripcion: "Battle royale multijugador lleno de acción y construcción.",
    categoria: "Acción",
    plataforma: "PC, PS5, Xbox, Switch",
    jugadores: "25M",
    imagen: "imgs/juegos/fortnite.jpg"
  },
  GTA: {
    titulo: "GTA V",
    descripcion: "Explora Los Santos en este juego de crimen, acción y mundo abierto.",
    categoria: "Aventura",
    plataforma: "PC, PS5, Xbox",
    jugadores: "10M",
    imagen: "imgs/juegos/gta.jpg"
  },
  Halo: {
    titulo: "Halo Infinite",
    descripcion: "Una saga épica de ciencia ficción y disparos en primera persona.",
    categoria: "Shooter",
    plataforma: "Xbox, PC",
    jugadores: "5M",
    imagen: "imgs/juegos/Halo.jpg"
  },
  Valorant: {
    titulo: "Valorant",
    descripcion: "FPS competitivo con habilidades únicas para cada agente.",
    categoria: "Estrategia",
    plataforma: "PC",
    jugadores: "15M",
    imagen: "imgs/juegos/valorant.jpg"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const listaFavoritos = document.getElementById("lista-favoritos");
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  if (favoritos.length === 0) {
    listaFavoritos.innerHTML = "<p>No tienes juegos favoritos aún.</p>";
    return;
  }

  favoritos.forEach(nombreJuego => {
    const juego = juegos[nombreJuego];
    if (!juego) return; // En caso que no exista el juego

    const div = document.createElement("div");
    div.className = "favorito-item";

    div.innerHTML = `
      <img src="${juego.imagen}" alt="${juego.titulo}" />
      <div class="favorito-info">
        <h3>${juego.titulo}</h3>
        <p>${juego.descripcion}</p>
        <p><strong>Categoría:</strong> ${juego.categoria}</p>
        <p><strong>Plataforma:</strong> ${juego.plataforma}</p>
        <p><strong>Jugadores al mes:</strong> ${juego.jugadores}</p>
      </div>
      <button class="btn-eliminar" data-juego="${nombreJuego}">Eliminar</button>
    `;

    listaFavoritos.appendChild(div);
  });

  // Manejar eliminación
  listaFavoritos.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-eliminar")) {
      const juegoEliminar = e.target.getAttribute("data-juego");
      favoritos = favoritos.filter(j => j !== juegoEliminar);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      // Quitar del DOM
      e.target.parentElement.remove();
      if (favoritos.length === 0) {
        listaFavoritos.innerHTML = "<p>No tienes juegos favoritos aún.</p>";
      }
    }
  });
});
