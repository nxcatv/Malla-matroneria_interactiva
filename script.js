fetch('malla.json')
  .then(response => response.json())
  .then(data => {
    crearMallaDesdeJson(data);
  });

function crearMallaDesdeJson(malla) {
  const contenedor = document.getElementById('contenedor-malla');
  contenedor.innerHTML = '';

  malla.forEach(semestreData => {
    const bloque = document.createElement('div');
    bloque.className = 'bloque-semestre';
    const titulo = document.createElement('h2');
    titulo.textContent = `Semestre ${semestreData.semestre}`;
    bloque.appendChild(titulo);

    semestreData.ramos.forEach(ramo => {
      let nombre = '';
      let requisitos = [];

      if (typeof ramo === 'string') {
        nombre = ramo;
      } else {
        nombre = ramo.nombre;
        requisitos = ramo.requisitos || [];
      }

      const divRamo = document.createElement('div');
      divRamo.className = 'ramo';
      divRamo.textContent = nombre;
      divRamo.dataset.nombre = nombre;
      divRamo.dataset.requisitos = JSON.stringify(requisitos);
      bloque.appendChild(divRamo);
    });

    contenedor.appendChild(bloque);
  });

  activarInteractividad();
}

function activarInteractividad() {
  const ramos = document.querySelectorAll('.ramo');

  ramos.forEach(ramo => {
    ramo.addEventListener('click', () => {
      const requisitos = JSON.parse(ramo.dataset.requisitos || '[]');
      const cumplidos = requisitos.every(nombreReq => {
        const ramoReq = [...ramos].find(r => r.dataset.nombre === nombreReq);
        return ramoReq && ramoReq.classList.contains('aprobado');
      });

      if (requisitos.length === 0 || cumplidos) {
        ramo.classList.toggle('aprobado');
      } else {
        alert(`No puedes marcar este ramo aún. Requiere:\n- ${requisitos.join('\n- ')}`);
      }
    });
  });
}
