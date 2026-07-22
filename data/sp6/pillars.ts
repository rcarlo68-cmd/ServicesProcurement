import type { SP6Pillar } from "@/types/sp6";

export const pillarsTitle = "Los seis pilares del Modelo SP6";

export const pillarsIntroduction: string[] = [
  "El Modelo SP6 se estructura sobre seis pilares que representan las capacidades esenciales para fortalecer la cadena de suministro. Cada uno aborda un ámbito específico de gestión, pero adquiere su mayor valor cuando interactúa de manera coordinada con los demás.",

  "La metodología parte del principio de que la eficiencia de una organización no depende de la excelencia de un proceso aislado, sino del desempeño conjunto de todas las capacidades que participan en el abastecimiento, la logística y las operaciones.",
];

export const pillars: SP6Pillar[] = [
  {
    id: "procurement",
    title: "Procurement",
    description: [
      "El abastecimiento constituye el punto de partida de toda cadena de suministro. Una gestión estratégica de Procurement no se limita a ejecutar procesos de compra; busca garantizar que los bienes y servicios requeridos lleguen en las condiciones adecuadas, con oportunidad, transparencia y el mejor valor para la organización.",

      "Este pilar comprende la planificación de compras, la gestión de proveedores, la administración de contratos, el análisis de riesgos, la negociación estratégica y el fortalecimiento de los procesos de abastecimiento.",

      "Su propósito es transformar la función de compras en un generador de valor para el negocio.",
    ],
  },
  {
    id: "auditoria-logistica",
    title: "Auditoría Logística",
    description: [
      "No es posible mejorar aquello que no se evalúa.",

      "La Auditoría Logística permite conocer el estado real de la cadena de suministro mediante una evaluación sistemática de procesos, controles, indicadores y riesgos operativos.",

      "Este pilar identifica brechas entre la operación diseñada y la operación ejecutada, facilitando la priorización de oportunidades de mejora y la implementación de acciones correctivas orientadas a fortalecer el desempeño organizacional.",

      "Más que verificar el cumplimiento de procedimientos, busca comprender cómo funcionan realmente los procesos y cuál es su impacto sobre los resultados del negocio.",
    ],
  },
  {
    id: "operaciones-distribucion",
    title: "Operaciones y Distribución",
    description: [
      "Toda organización depende de la capacidad de transformar recursos en productos o servicios disponibles para sus clientes internos y externos.",

      "Este pilar analiza el flujo operativo desde la recepción de materiales hasta la distribución final, evaluando la coordinación entre áreas, la utilización de recursos, la continuidad operativa y el nivel de servicio.",

      "El objetivo es desarrollar operaciones más eficientes, flexibles y alineadas con las necesidades del negocio.",
    ],
  },
  {
    id: "almacenes-inventarios",
    title: "Almacenes e Inventarios",
    description: [
      "Los inventarios representan uno de los activos más importantes de cualquier organización y, al mismo tiempo, una de las principales fuentes de pérdidas cuando no son administrados adecuadamente.",

      "Este pilar fortalece la gestión de almacenes mediante la mejora de la confiabilidad de los registros, la optimización de procesos, el control de existencias, la trazabilidad de materiales y la organización física de los centros de almacenamiento.",

      "Su finalidad es proporcionar información confiable que respalde la continuidad operativa y facilite una adecuada toma de decisiones.",
    ],
  },
  {
    id: "desarrollo-talento",
    title: "Desarrollo del Talento",
    description: [
      "Los procesos pueden diseñarse correctamente y la tecnología puede ser adecuada, pero los resultados dependen de las personas que los ejecutan.",

      "Este pilar promueve el desarrollo de competencias técnicas, el fortalecimiento del liderazgo, la formación continua y la construcción de una cultura orientada a la mejora permanente.",

      "El conocimiento adquiere valor cuando las personas son capaces de aplicarlo para resolver problemas y generar resultados sostenibles.",
    ],
  },
  {
    id: "sp-knowledge",
    title: "SP Knowledge",
    description: [
      "La experiencia solo genera valor cuando se convierte en conocimiento compartido.",

      "SP Knowledge representa el compromiso de Services Procurement con la investigación aplicada, la generación de contenido especializado, la formación profesional y la difusión de buenas prácticas en logística, abastecimiento y cadena de suministro.",

      "Este pilar integra la experiencia operativa con el aprendizaje continuo, impulsando la innovación y la mejora permanente mediante publicaciones, conferencias, programas de formación y desarrollo de metodologías propias.",
    ],
  },
];

export const integratedModel = {
  title: "Un modelo integrado",
  paragraphs: [
    "Cada uno de estos pilares aporta capacidades específicas; sin embargo, el verdadero valor del Modelo SP6 surge de su integración.",

    "Las organizaciones obtienen mejores resultados cuando Procurement trabaja coordinadamente con Operaciones, cuando los inventarios proporcionan información confiable para la toma de decisiones, cuando las auditorías generan oportunidades de mejora, cuando el talento desarrolla nuevas capacidades y cuando el conocimiento adquirido se incorpora de manera sistemática a la organización.",

    "SP6 no propone optimizar procesos aislados. Propone fortalecer la cadena de suministro como un sistema, donde cada capacidad contribuye al desempeño global de la organización.",
  ],
};