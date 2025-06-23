const idioma = 'es'; // O dinámicamente según selección del usuario

const temas = {
  mesopotamia: {
    es: {
      titulo: "Mesopotamia",
      descripcion: "Mesopotamia fue una región entre los ríos Tigris y Éufrates, cuna de las primeras civilizaciones como Sumeria, Babilonia y Asiria.",
      enlace: "mesopotamia.html"
    },
    en: {
      titulo: "Mesopotamia",
      descripcion: "Mesopotamia was a region between the Tigris and Euphrates rivers, birthplace of the first civilizations like Sumer, Babylon, and Assyria.",
      enlace: "mesopotamia.html"
    },
    pt: {
      titulo: "Mesopotâmia",
      descripcion: "Mesopotâmia foi uma região entre os rios Tigre e Eufrates, berço das primeiras civilizações como Suméria, Babilônia e Assíria.",
      enlace: "mesopotamia.html"
    }
  },
  egipto: {
    es: {
      titulo: "Egipto",
      descripcion: "Egipto se desarrolló a lo largo del Nilo. Es conocido por sus pirámides, faraones y jeroglíficos.",
      enlace: "egipto.html"
    },
    en: {
      titulo: "Egypt",
      descripcion: "Egypt developed along the Nile. It is known for its pyramids, pharaohs, and hieroglyphics.",
      enlace: "egipto.html"
    },
    pt: {
      titulo: "Egito",
      descripcion: "O Egito se desenvolveu ao longo do Nilo. É conhecido por suas pirâmides, faraós e hieróglifos.",
      enlace: "egipto.html"
    }
  },
  // Repite para roma, grecia, china con sus traducciones
  roma: {
    es: {
      titulo: "Roma",
      descripcion: "La antigua Roma fue un imperio que influyó en política, derecho, idioma y arquitectura.",
      enlace: "roma.html"
    },
    en: {
      titulo: "Rome",
      descripcion: "Ancient Rome was an empire that influenced politics, law, language, and architecture.",
      enlace: "roma.html"
    },
    pt: {
      titulo: "Roma",
      descripcion: "A antiga Roma foi um império que influenciou política, direito, idioma e arquitetura.",
      enlace: "roma.html"
    }
  },
  grecia: {
    es: {
      titulo: "Grecia",
      descripcion: "Grecia fue cuna de la democracia, filosofía y teatro. Hogar de Sócrates y Platón.",
      enlace: "grecia.html"
    },
    en: {
      titulo: "Greece",
      descripcion: "Greece was the cradle of democracy, philosophy, and theater. Home of Socrates and Plato.",
      enlace: "grecia.html"
    },
    pt: {
      titulo: "Grécia",
      descripcion: "A Grécia foi berço da democracia, filosofia e teatro. Lar de Sócrates e Platão.",
      enlace: "grecia.html"
    }
  },
  china: {
    es: {
      titulo: "China",
      descripcion: "La antigua China desarrolló ciencia, filosofía y arte. Dinastías como la Shang y Han son parte clave.",
      enlace: "china.html"
    },
    en: {
      titulo: "China",
      descripcion: "Ancient China developed science, philosophy, and art. Dynasties like Shang and Han are key parts.",
      enlace: "china.html"
    },
    pt: {
      titulo: "China",
      descripcion: "A antiga China desenvolveu ciência, filosofia e arte. Dinastias como Shang e Han são parte fundamental.",
      enlace: "china.html"
    }
  }
};

function mostrarContenido(tema) {
  const info = temas[tema][idioma];
  if (!info) return; // Por si hay error

  document.getElementById("contenido-tema").style.display = "block";
  document.getElementById("titulo-tema").textContent = info.titulo;
  document.getElementById("descripcion-tema").textContent = info.descripcion;
  document.getElementById("boton-quiz").href = info.enlace;
}
