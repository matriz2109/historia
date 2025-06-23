const mensajes = {
  es: {
    correcto: '¡Correcto!',
    incorrecto: 'Incorrecto. Intenta otra vez.'
  },
  en: {
    correcto: 'Correct!',
    incorrecto: 'Incorrect. Try again.'
  },
  pt: {
    correcto: 'Correto!',
    incorrecto: 'Incorreto. Tente novamente.'
  }
};

let idioma = 'es'; // o 'en' o 'pt', según selección del usuario

function mostrarQuiz(tema) {
  const quizzes = document.querySelectorAll('.quiz-tema');
  quizzes.forEach(q => {
    q.style.display = 'none';
    const feedbacks = q.querySelectorAll('.feedback');
    feedbacks.forEach(f => (f.textContent = ''));
    const buttons = q.querySelectorAll('button');
    buttons.forEach(b => {
      b.disabled = false;
      b.style.backgroundColor = '#008080';
      b.style.color = 'white';
    });
  });

  const quizMostrar = document.getElementById(tema);
  if (quizMostrar) {
    quizMostrar.style.display = 'block';
  }
}

function verificarRespuesta(boton, esCorrecta) {
  const feedback = boton.parentElement.querySelector('.feedback');
  if (esCorrecta) {
    feedback.textContent = mensajes[idioma].correcto;
    feedback.style.color = 'green';
  } else {
    feedback.textContent = mensajes[idioma].incorrecto;
    feedback.style.color = 'red';
  }

  const botones = boton.parentElement.querySelectorAll('button');
  botones.forEach(b => {
    b.disabled = true;
    b.style.backgroundColor = '#ccc';
    b.style.color = '#666';
  });

  if (!esCorrecta) {
    const correcto = Array.from(botones).find(b => b.onclick.toString().includes('true'));
    if (correcto) {
      correcto.style.backgroundColor = 'green';
      correcto.style.color = 'white';
    }
  }
}
