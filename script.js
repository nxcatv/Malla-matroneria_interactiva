const malla = [
  {
    semestre: "1° Semestre",
    ramos: [
      { nombre: "Biología", codigo: "bio1" },
      { nombre: "Química", codigo: "quim1" },
      { nombre: "Psicología Evolutiva", codigo: "psico1" },
      { nombre: "Sociología", codigo: "soc1" },
      { nombre: "Taller de Comunicación", codigo: "com1" }
    ]
  },
  {
    semestre: "2° Semestre",
    ramos: [
      { nombre: "Biología del Desarrollo", codigo: "bio2", prerequisitos: ["bio1"] },
      { nombre: "Química Biológica", codigo: "quim2", prerequisitos: ["quim1"] },
      { nombre: "Psicología del Ciclo Vital", codigo: "psico2", prerequisitos: ["psico1"] },
      { nombre: "Taller de Autocuidado", codigo: "auto2" },
      { nombre: "Epistemología", codigo: "epis2" }
    ]
  },
  {
    semestre: "3° Semestre",
    ramos: [
      { nombre: "Anatomía", codigo: "anato3", prerequisitos: ["bio1", "bio2"] },
      { nombre: "Microbiología", codigo: "micro3", prerequisitos: ["quim2"] },
      { nombre: "Salud Pública", codigo: "salud3" },
      { nombre: "Taller de Salud Comunitaria", codigo: "comu3", prerequisitos: ["soc1", "com1"] },
      { nombre: "Ética y Bioética", codigo: "etica3", prerequisitos: ["epis2"] }
    ]
  },
  {
    semestre: "4° Semestre",
    ramos: [
      { nombre: "Fisiología", codigo: "fisio4", prerequisitos: ["anato3"] },
      { nombre: "Farmacología", codigo: "farma4", prerequisitos: ["micro3", "quim2"] },
      { nombre: "Género y Salud", codigo: "genero4", prerequisitos: ["soc1"] },
      { nombre: "Taller de Promoción de la Salud", codigo: "promo4", prerequisitos: ["salud3"] },
      { nombre: "Estadística", codigo: "estad4" }
    ]
  }
];
crearMalla();
