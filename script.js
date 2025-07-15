const ramos = [
  { id: "biologia", nombre: "Biología", prerequisitos: [] },
  { id: "anatomia", nombre: "Anatomía", prerequisitos: ["biologia"] },
  { id: "fisiologia", nombre: "Fisiología", prerequisitos: ["anatomia"] },
];

const estado = {};

function crearMalla() {
  const mallaDiv = document.getElementById("malla");
  const semestreDiv = document.createElement("div");
  semestreDiv.className = "semestre";
  semestreDiv.innerHTML = "<h2>Primer semestre</h2>";

  ramos.forEach((ramo) => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = ramo.id;
    div.textContent = ramo.nombre;

    // Estado inicial: no aprobado
    estado[ramo.id] = false;

    // Revisar si tiene prerrequisitos
    if (ramo.prerequisitos.length > 0) {
      div.classList.add("bloqueado");
    }

    div.addEventListener("click", () => {
      if (div.classList.contains("bloqueado")) return;

      estado[ramo.id] = !estado[ramo.id];
      div.classList.toggle("aprobado");

      actualizarBloqueos();
    });

    semestreDiv.appendChild(div);
  });

  mallaDiv.appendChild(semestreDiv);
}

function actualizarBloqueos() {
  ramos.forEach((ramo) => {
    const div = document.getElementById(ramo.id);
    const aprobados = ramo.prerequisitos.every((id) => estado[id]);

    if (!estado[ramo.id]) {
      if (ramo.prerequisitos.length > 0 && !aprobados) {
        div.classList.add("bloqueado");
        div.classList.remove("aprobado");
      } else {
        div.classList.remove("bloqueado");
      }
    }
  });
}

crearMalla();
