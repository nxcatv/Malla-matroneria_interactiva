const malla = [
  {
    semestre: "Primer semestre",
    ramos: [
      { nombre: "Biología", prerequisitos: [] },
      { nombre: "Anatomía", prerequisitos: [] },
      { nombre: "Fisiología", prerequisitos: [] }
    ]
  },
  {
    semestre: "Segundo semestre",
    ramos: [
      { nombre: "Salud Pública", prerequisitos: ["Biología"] },
      { nombre: "Embriología", prerequisitos: ["Biología", "Anatomía"] },
      { nombre: "Bioquímica", prerequisitos: ["Fisiología"] }
    ]
  },
  {
    semestre: "Tercer semestre",
    ramos: [
      { nombre: "Microbiología", prerequisitos: ["Biología", "Bioquímica"] },
      { nombre: "Psicología Evolutiva", prerequisitos: [] },
      { nombre: "Farmacología", prerequisitos: ["Fisiología"] }
    ]
  },
  {
    semestre: "Cuarto semestre",
    ramos: [
      { nombre: "Enfermería Médico Quirúrgica", prerequisitos: ["Fisiología"] },
      { nombre: "Bioética", prerequisitos: [] },
      { nombre: "Ginecología", prerequisitos: ["Anatomía", "Fisiología"] }
    ]
  },
  {
    semestre: "Quinto semestre",
    ramos: [
      { nombre: "Obstetricia", prerequisitos: ["Embriología", "Ginecología"] },
      { nombre: "Neonatología", prerequisitos: ["Obstetricia"] },
      { nombre: "Psicoprofilaxis", prerequisitos: ["Psicología Evolutiva", "Obstetricia"] }
    ]
  },
  {
    semestre: "Sexto semestre",
    ramos: [
      { nombre: "Matronería Clínica I", prerequisitos: ["Obstetricia", "Neonatología"] },
      { nombre: "Taller de Lactancia", prerequisitos: ["Neonatología"] },
      { nombre: "Promoción de la Salud", prerequisitos: ["Salud Pública"] }
    ]
  },
  {
    semestre: "Séptimo semestre",
    ramos: [
      { nombre: "Matronería Clínica II", prerequisitos: ["Matronería Clínica I"] },
      { nombre: "Gestión en Salud", prerequisitos: ["Salud Pública"] },
      { nombre: "Investigación en Salud", prerequisitos: [] }
    ]
  },
  {
    semestre: "Octavo semestre",
    ramos: [
      { nombre: "Internado Comunitario", prerequisitos: ["Promoción de la Salud", "Gestión en Salud"] },
      { nombre: "Internado de Matronería", prerequisitos: ["Matronería Clínica II"] }
    ]
  },
  {
    semestre: "Noveno semestre",
    ramos: [
      { nombre: "Internado de Neonatología", prerequisitos: ["Neonatología", "Matronería Clínica II"] },
      { nombre: "Electivo Profesional I", prerequisitos: [] }
    ]
  },
  {
    semestre: "Décimo semestre",
    ramos: [
      { nombre: "Internado de Ginecología", prerequisitos: ["Ginecología", "Matronería Clínica II"] },
      { nombre: "Electivo Profesional II", prerequisitos: ["Electivo Profesional I"] }
    ]
  }
];

function crearMalla() {
  const contenedor = document.getElementById("malla");

  const completados = JSON.parse(localStorage.getItem("ramosCompletados")) || [];

  malla.forEach((semestreData) => {
    const bloque = document.createElement("div");
    bloque.className = "bloque";
    const titulo = document.createElement("h2");
    titulo.textContent = semestreData.semestre;
    bloque.appendChild(titulo);

    semestreData.ramos.forEach((ramo) => {
      const boton = document.createElement("button");
      boton.textContent = ramo.nombre;

      const completado = completados.includes(ramo.nombre);
      const habilitado = ramo.prerequisitos.every((pre) => completados.includes(pre));

      if (completado) {
        boton.className = "ramo completado";
      } else if (habilitado) {
        boton.className = "ramo habilitado";
      } else {
        boton.className = "ramo bloqueado";
        boton.disabled = true;
      }

      boton.onclick = () => {
        if (!completados.includes(ramo.nombre)) {
          completados.push(ramo.nombre);
        } else {
          completados.splice(completados.indexOf(ramo.nombre), 1);
        }
        localStorage.setItem("ramosCompletados", JSON.stringify(completados));
        location.reload();
      };

      bloque.appendChild(boton);
    });

    contenedor.appendChild(bloque);
  });
}

window.onload = crearMalla;
