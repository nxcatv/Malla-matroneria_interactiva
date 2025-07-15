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
malla.push(
  {
    semestre: "5° Semestre",
    ramos: [
      { nombre: "Embriología", codigo: "embrio5", prerequisitos: ["bio2", "anato3"] },
      { nombre: "Parasitología", codigo: "parasito5", prerequisitos: ["micro3"] },
      { nombre: "Salud Sexual y Reproductiva", codigo: "ssr5", prerequisitos: ["genero4"] },
      { nombre: "Investigación I", codigo: "inv5", prerequisitos: ["estad4"] },
      { nombre: "Taller de Participación Social", codigo: "tps5", prerequisitos: ["comu3"] }
    ]
  },
  {
    semestre: "6° Semestre",
    ramos: [
      { nombre: "Ginecología", codigo: "gine6", prerequisitos: ["ssr5", "anato3"] },
      { nombre: "Obstetricia", codigo: "obste6", prerequisitos: ["embrio5", "fisio4"] },
      { nombre: "Salud Familiar", codigo: "fam6", prerequisitos: ["salud3", "promo4"] },
      { nombre: "Investigación II", codigo: "inv6", prerequisitos: ["inv5"] },
      { nombre: "Práctica Integrada I", codigo: "practica6", prerequisitos: ["ssr5", "promo4"] }
    ]
  },
  {
    semestre: "7° Semestre",
    ramos: [
      { nombre: "Neonatología", codigo: "neo7", prerequisitos: ["obste6"] },
      { nombre: "Enfermería del Recién Nacido", codigo: "ern7", prerequisitos: ["neo7"] },
      { nombre: "Salud Mental", codigo: "mental7", prerequisitos: ["psico2"] },
      { nombre: "Educación en Salud", codigo: "edu7", prerequisitos: ["promo4"] },
      { nombre: "Práctica Integrada II", codigo: "practica7", prerequisitos: ["practica6"] }
    ]
  },
  {
    semestre: "8° Semestre",
    ramos: [
      { nombre: "Urgencia Obstétrica", codigo: "urg8", prerequisitos: ["obste6", "gine6"] },
      { nombre: "Legislación en Salud", codigo: "legal8" },
      { nombre: "Administración en Salud", codigo: "admin8", prerequisitos: ["salud3"] },
      { nombre: "Investigación III", codigo: "inv8", prerequisitos: ["inv6"] },
      { nombre: "Práctica Integrada III", codigo: "practica8", prerequisitos: ["practica7"] }
    ]
  },
  {
    semestre: "9° Semestre",
    ramos: [
      { nombre: "Internado Área Obstétrica", codigo: "internado9", prerequisitos: ["urg8", "practica8"] },
      { nombre: "Internado Área Neonatal", codigo: "neo9", prerequisitos: ["ern7", "practica8"] },
      { nombre: "Internado Área Comunitaria", codigo: "comu9", prerequisitos: ["edu7", "admin8"] },
      { nombre: "Investigación IV", codigo: "inv9", prerequisitos: ["inv8"] }
    ]
  },
  {
    semestre: "10° Semestre",
    ramos: [
      { nombre: "Internado Final", codigo: "final10", prerequisitos: ["internado9", "neo9", "comu9"] },
      { nombre: "Tesis o Actividad de Grado", codigo: "tesis10", prerequisitos: ["inv9"] }
    ]
  }
);

crearMalla();
