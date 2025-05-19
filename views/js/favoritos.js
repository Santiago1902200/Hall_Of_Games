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

// Se ejecuta cuando el contenido HTML está completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Obtiene el contenedor donde se mostrarán los juegos favoritos
  const listaFavoritos = document.getElementById("lista-favoritos");
  // Recupera el arreglo de favoritos guardados en localStorage o uno vacío si no hay
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // Si no hay juegos favoritos, muestra un mensaje y termina la ejecución
  if (favoritos.length === 0) {
    listaFavoritos.innerHTML = "<p>No tienes juegos favoritos aún.</p>";
    return;
  }

  // Para cada juego guardado en favoritos
  favoritos.forEach(nombreJuego => {
    // Busca los datos del juego en el objeto "juegos"
    const juego = juegos[nombreJuego];
    // Si no existe el juego, simplemente ignora y continúa
    if (!juego) return;

    // Crea un contenedor <div> para mostrar la información del juego favorito
    const div = document.createElement("div");
    div.className = "favorito-item";

    // Llena el div con la estructura HTML que muestra imagen, título, descripción, categoría, plataforma y jugadores
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

    // Añade el div creado al contenedor principal de favoritos
    listaFavoritos.appendChild(div);
  });

  // Añade un event listener para detectar clicks dentro del contenedor de favoritos (delegación)
  listaFavoritos.addEventListener("click", (e) => {
    // Si el elemento clickeado es un botón con clase 'btn-eliminar'
    if (e.target.classList.contains("btn-eliminar")) {
      // Obtiene el nombre del juego a eliminar a partir del atributo data-juego del botón
      const juegoEliminar = e.target.getAttribute("data-juego");
      // Actualiza el arreglo de favoritos eliminando el juego seleccionado
      favoritos = favoritos.filter(j => j !== juegoEliminar);
      // Guarda el arreglo actualizado en localStorage
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      // Elimina el contenedor del juego del DOM para que desaparezca de la vista
      e.target.parentElement.remove();
      // Si después de eliminar no quedan juegos favoritos, muestra mensaje
      if (favoritos.length === 0) {
        listaFavoritos.innerHTML = "<p>No tienes juegos favoritos aún.</p>";
      }
    }
  });
});
