import type { SP6MethodologyStep } from "@/types/sp6";

export const methodologyTitle = "¿Cómo trabaja el Modelo SP6?";

export const methodologyIntroduction: string[] = [
  "El Modelo SP6 propone una forma estructurada de abordar los desafíos de la cadena de suministro, adaptándose a la realidad, madurez y objetivos de cada organización. No se basa en soluciones prediseñadas ni en modelos rígidos de implementación; por el contrario, parte del entendimiento de que cada empresa posee procesos, restricciones y oportunidades particulares.",

  "Su aplicación se desarrolla mediante un proceso secuencial que permite comprender la situación actual, identificar oportunidades de mejora y acompañar la implementación de acciones orientadas a generar resultados sostenibles.",
];

export const methodology: SP6MethodologyStep[] = [
  {
    step: 1,
    title: "Comprender el negocio",
    description: [
      "Toda intervención comienza con el conocimiento de la organización.",

      "Antes de analizar procesos, es indispensable comprender el contexto operativo, el modelo de negocio, la estructura organizacional, los objetivos estratégicos y las características de la cadena de suministro.",

      "Esta etapa permite establecer el alcance del trabajo y asegurar que las acciones propuestas respondan a las verdaderas necesidades de la organización.",
    ],
  },
  {
    step: 2,
    title: "Diagnosticar la situación actual",
    description: [
      "Una vez comprendido el negocio, se realiza una evaluación integral de los procesos vinculados a la cadena de suministro.",

      "El objetivo es construir una visión objetiva de la situación actual y determinar el nivel de madurez de la organización.",
    ],
    bullets: [
      "Organización y responsabilidades.",
      "Procesos de abastecimiento.",
      "Gestión de almacenes e inventarios.",
      "Operaciones y distribución.",
      "Gestión de proveedores.",
      "Controles internos.",
      "Indicadores de desempeño.",
      "Riesgos operativos.",
      "Uso de herramientas tecnológicas.",
      "Desarrollo de capacidades del equipo.",
    ],
  },
  {
    step: 3,
    title: "Identificar oportunidades de mejora",
    description: [
      "Con la información obtenida se identifican las brechas que limitan el desempeño de la cadena de suministro.",

      "No todas las oportunidades tienen el mismo impacto ni requieren el mismo esfuerzo de implementación. Por ello, las acciones se priorizan considerando el riesgo, el beneficio esperado, la viabilidad de ejecución y su contribución a los objetivos estratégicos de la organización.",

      "Esta etapa permite concentrar los esfuerzos donde realmente generan valor.",
    ],
  },
  {
    step: 4,
    title: "Diseñar el plan de acción",
    description: [
      "Las oportunidades identificadas se traducen en un plan de trabajo estructurado.",

      "Cada iniciativa incorpora objetivos definidos, responsables, prioridades, recursos necesarios y criterios para evaluar su avance.",

      "El propósito es transformar el diagnóstico en un conjunto de acciones concretas que puedan ejecutarse de manera ordenada y medible.",
    ],
  },
  {
    step: 5,
    title: "Acompañar la implementación",
    description: [
      "La mejora no concluye con la entrega de un informe.",

      "Services Procurement acompaña a las organizaciones durante la implementación de las iniciativas priorizadas, brindando asesoría técnica, seguimiento y apoyo en la resolución de los desafíos que surgen durante la ejecución.",

      "Este acompañamiento facilita que las mejoras propuestas se integren a la operación y puedan sostenerse en el tiempo.",
    ],
  },
  {
    step: 6,
    title: "Medir resultados y fortalecer la mejora continua",
    description: [
      "Toda intervención finaliza evaluando los resultados obtenidos y las oportunidades de evolución futura.",

      "La medición del desempeño permite verificar el impacto de las acciones implementadas, fortalecer la cultura de mejora continua y generar conocimiento que contribuya al desarrollo permanente de la organización.",

      "El Modelo SP6 considera que cada proyecto representa también una oportunidad para aprender, perfeccionar procesos y fortalecer las capacidades de las personas que participan en ellos.",
    ],
  },
];

export const methodologyConclusion = {
  title: "Una metodología orientada a resultados",
  paragraphs: [
    "El Modelo SP6 no busca realizar diagnósticos para generar documentos que permanezcan archivados.",

    "Su propósito es convertir el análisis en decisiones, las decisiones en acciones y las acciones en resultados que fortalezcan la competitividad de la organización.",

    "Cada intervención representa una oportunidad para construir procesos más sólidos, mejorar la coordinación entre áreas, desarrollar capacidades internas y consolidar una cadena de suministro preparada para responder a los desafíos actuales y futuros.",
  ],
};