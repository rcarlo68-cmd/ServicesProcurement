import fs from "node:fs";
import path from "node:path";
import mammoth from "mammoth";

const PROJECT_ROOT = process.cwd();

const NEWSLETTERS_DIR = path.join(
  PROJECT_ROOT,
  "content",
  "newsletters"
);

const KNOWLEDGE_FILE = path.join(
  PROJECT_ROOT,
  "data",
  "knowledge.ts"
);

const pillarMap: Record<string, string> = {
  procurement: "procurement",

  "almacenes e inventarios": "inventory",
  almacenes: "inventory",

  "operaciones y distribucion": "operations",
  operaciones: "operations",
  operations: "operations",

  "auditoria logistica": "audit",
  auditoria: "audit",
  audit: "audit",

  "transformacion digital": "digital",
  transformacion: "digital",
  digital: "digital",

  "desarrollo del talento": "talent",
  talento: "talent",
  talent: "talent",
};

const pillarImages: Record<string, string> = {
  audit: "audit-hero.png",
  digital: "digital-hero.png",
  inventory: "inventory-hero.png",
  operations: "operation-hero.png",
  procurement: "procurement-hero.png",
  talent: "talent-hero.png",
};

function cleanValue(value: string): string {
  return value
    .replace(/\u200B/g, "")
    .replace(/\uFEFF/g, "")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeKey(value: string): string {
  return cleanValue(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/:$/, "")
    .toLowerCase()
    .trim();
}

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[¿?¡!]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeTsString(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"');
}

/**
 * Convierte el texto extraído del Word en campos.
 *
 * La plantilla puede venir como:
 *
 * TÍTULO: ...
 * Fecha: ...
 * Tiempo de lectura: ...
 * Tipo: newsletter
 * Pilar: operations
 * Featured: false
 * LinkedIn: ...
 *
 * También tolera campos sin dos puntos.
 */
function extractFields(text: string): Record<string, string> {
  const lines = text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\u200B/g, "")
    .replace(/\uFEFF/g, "")
    .replace(/\u00A0/g, " ")
    .split("\n")
    .map((line) => cleanValue(line))
    .filter(Boolean);

  const fields: Record<string, string> = {};

  const knownFields = [
    "TÍTULO",
    "TITULO",
    "FECHA",
    "TIEMPO DE LECTURA",
    "TIPO",
    "PILAR",
    "FEATURED",
    "DESTACADO",
    "LINKEDIN",
    "RESUMEN",
    "TAGS",
  ];

  const normalizedKnownFields = knownFields.map(
    (field) => ({
      original: field,
      normalized: normalizeKey(field),
    })
  );

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const normalizedLine = normalizeKey(line);

    const matchedField =
      normalizedKnownFields.find(
        ({ normalized }) =>
          normalizedLine === normalized ||
          normalizedLine.startsWith(`${normalized} `) ||
          normalizedLine.startsWith(`${normalized}:`)
      );

    if (!matchedField) {
      continue;
    }

    const fieldName = normalizeKey(
      matchedField.original
    );

    let value = line
      .slice(matchedField.original.length)
      .replace(/^[:\s]+/, "")
      .trim();

    /**
     * Si el valor no estaba en la misma línea,
     * toma la siguiente línea.
     */
    if (!value && lines[i + 1]) {
      const nextLine = lines[i + 1];
      const nextNormalized = normalizeKey(nextLine);

      const nextIsField =
        normalizedKnownFields.some(
          ({ normalized }) =>
            nextNormalized === normalized ||
            nextNormalized.startsWith(`${normalized} `) ||
            nextNormalized.startsWith(`${normalized}:`)
        );

      if (!nextIsField) {
        value = nextLine;
        i++;
      }
    }

    if (value) {
      fields[fieldName] = cleanValue(value);
    }
  }

  /**
   * Segundo intento para documentos donde Mammoth
   * devuelve todos los párrafos en una sola línea.
   *
   * Busca directamente los nombres de los campos y
   * corta hasta el siguiente campo.
   */
  if (
    !fields["titulo"] ||
    !fields["pilar"] ||
    !fields["fecha"]
  ) {
    const source = cleanValue(text);

    const normalizedSource = normalizeKey(source);

    const fieldNames = [
      "titulo",
      "fecha",
      "tiempo de lectura",
      "tipo",
      "pilar",
      "featured",
      "destacado",
      "linkedin",
      "resumen",
      "tags",
    ];

    for (const fieldName of fieldNames) {
      if (fields[fieldName]) {
        continue;
      }

      const start = normalizedSource.indexOf(
        fieldName
      );

      if (start === -1) {
        continue;
      }

      const valueStart =
        start + fieldName.length;

      let valueEnd = normalizedSource.length;

      for (const nextField of fieldNames) {
        if (nextField === fieldName) {
          continue;
        }

        const nextIndex =
          normalizedSource.indexOf(
            nextField,
            valueStart
          );

        if (
          nextIndex !== -1 &&
          nextIndex < valueEnd
        ) {
          valueEnd = nextIndex;
        }
      }

      const value = source
        .slice(valueStart, valueEnd)
        .replace(/^[:\s]+/, "")
        .trim();

      if (value) {
        fields[fieldName] = cleanValue(value);
      }
    }
  }

  return fields;
}

function getRequiredField(
  fields: Record<string, string>,
  ...names: string[]
): string {
  for (const name of names) {
    const key = normalizeKey(name);

    if (fields[key]) {
      return fields[key];
    }
  }

  throw new Error(
    `No se encontró el campo "${names[0]}" en la plantilla.`
  );
}

function getOptionalField(
  fields: Record<string, string>,
  ...names: string[]
): string {
  for (const name of names) {
    const key = normalizeKey(name);

    if (fields[key]) {
      return fields[key];
    }
  }

  return "";
}

function parseNewsletter(text: string) {
  const fields = extractFields(text);

  const title = getRequiredField(
    fields,
    "titulo"
  );

  const pillarName = normalizeKey(
    getRequiredField(fields, "pilar")
  );

  const pillar = pillarMap[pillarName];

  if (!pillar) {
    throw new Error(
      `Pilar no reconocido: "${pillarName}".`
    );
  }

  const date = getRequiredField(
    fields,
    "fecha"
  );

  const readingTimeText =
    getRequiredField(
      fields,
      "tiempo de lectura"
    );

  const readingTimeMatch =
    readingTimeText.match(/\d+/);

  if (!readingTimeMatch) {
    throw new Error(
      `Tiempo de lectura inválido: "${readingTimeText}".`
    );
  }

  const readingTime = Number(
    readingTimeMatch[0]
  );

  const linkedinUrl =
    getRequiredField(
      fields,
      "linkedin"
    );

  /**
   * RESUMEN y TAGS son opcionales.
   *
   * Si el Word no los tiene, no bloqueamos
   * la importación.
   */
  let excerpt = getOptionalField(
    fields,
    "resumen"
  );

  const tagsText = getOptionalField(
    fields,
    "tags"
  );

  /**
   * Si no existe resumen, usamos una versión
   * corta del contenido disponible.
   *
   * Esto evita dejar el recurso sin excerpt.
   */
  if (!excerpt) {
    excerpt =
      "Contenido publicado por Ricardo Cabrera sobre gestión logística y cadena de suministro.";
  }

  const tags = tagsText
    ? tagsText
        .split(",")
        .map((tag) => cleanValue(tag))
        .filter(Boolean)
    : [];

  const featuredText = normalizeKey(
    getOptionalField(
      fields,
      "destacado",
      "featured"
    )
  );

  const featured =
    featuredText === "si" ||
    featuredText === "true";

  const slug = slugify(title);

  const id = `${pillar}-${slug}`;

  const imageName =
    pillarImages[pillar];

  if (!imageName) {
    throw new Error(
      `No existe una imagen configurada para el pilar "${pillar}".`
    );
  }

  const image =
    `/images/knowledge/${getImageFolder(
      pillar
    )}/${imageName}`;

  return {
    id,
    slug,
    pillar,
    type: "newsletter",
    title,
    excerpt,
    readingTime,
    publishedAt: date,
    author: "Ricardo Cabrera",
    image,
    featured,
    linkedinUrl,
    tags,
  };
}

function getImageFolder(
  pillar: string
): string {
  const folders: Record<
    string,
    string
  > = {
    audit: "audit",
    digital: "digital",
    inventory: "inventory",
    operations: "operations",
    procurement: "procurement",
    talent: "talent",
  };

  return folders[pillar];
}

function formatResource(
  resource: ReturnType<
    typeof parseNewsletter
  >
) {
  return `  {
    id: "${escapeTsString(resource.id)}",
    slug: "${escapeTsString(resource.slug)}",
    pillar: "${escapeTsString(resource.pillar)}",
    type: "newsletter",
    title: "${escapeTsString(resource.title)}",
    excerpt:
      "${escapeTsString(resource.excerpt)}",
    readingTime: ${resource.readingTime},
    publishedAt: "${escapeTsString(resource.publishedAt)}",
    author: "${escapeTsString(resource.author)}",
    image: "${escapeTsString(resource.image)}",
    featured: ${resource.featured},
    linkedinUrl:
      "${escapeTsString(resource.linkedinUrl)}",
    tags: [
${resource.tags
  .map(
    (tag) =>
      `      "${escapeTsString(tag)}",`
  )
  .join("\n")}
    ],
  },`;
}

/**
 * Busca un recurso existente por:
 * 1. LinkedIn
 * 2. ID
 * 3. Título
 */
function findExistingResource(
  knowledgeSource: string,
  resource: ReturnType<
    typeof parseNewsletter
  >
): {
  found: boolean;
  start: number;
  end: number;
} {
  const linkedin =
    resource.linkedinUrl.trim();

  /**
   * Primero LinkedIn, porque es el identificador
   * más confiable para detectar un mismo newsletter.
   */
  let searchIndex = -1;

  if (linkedin) {
    searchIndex =
      knowledgeSource.indexOf(linkedin);
  }

  /**
   * Si no encuentra LinkedIn, busca ID.
   */
  if (searchIndex === -1) {
    searchIndex =
      knowledgeSource.indexOf(
        `id: "${escapeTsString(resource.id)}"`
      );
  }

  /**
   * Finalmente busca título.
   */
  if (searchIndex === -1) {
    searchIndex =
      knowledgeSource.indexOf(
        `title: "${escapeTsString(resource.title)}"`
      );
  }

  if (searchIndex === -1) {
    return {
      found: false,
      start: -1,
      end: -1,
    };
  }

  /**
   * Busca el inicio del objeto que contiene
   * el recurso.
   */
  const start =
    knowledgeSource.lastIndexOf(
      "{",
      searchIndex
    );

  /**
   * Busca el cierre del objeto.
   */
  const end =
    knowledgeSource.indexOf(
      "},",
      searchIndex
    );

  if (start === -1 || end === -1) {
    return {
      found: true,
      start: -1,
      end: -1,
    };
  }

  return {
    found: true,
    start,
    end: end + 2,
  };
}

async function main() {
  if (!fs.existsSync(NEWSLETTERS_DIR)) {
    throw new Error(
      `No existe la carpeta: ${NEWSLETTERS_DIR}`
    );
  }

  if (!fs.existsSync(KNOWLEDGE_FILE)) {
    throw new Error(
      `No existe el archivo: ${KNOWLEDGE_FILE}`
    );
  }

  const files = fs
    .readdirSync(NEWSLETTERS_DIR)
    .filter(
      (file) =>
        file
          .toLowerCase()
          .endsWith(".docx") &&
        !file.startsWith("~$")
    );

  if (files.length === 0) {
    console.log(
      "No hay newsletters .docx para importar."
    );
    return;
  }

  let knowledgeSource =
    fs.readFileSync(
      KNOWLEDGE_FILE,
      "utf8"
    );

  let imported = 0;
  let updated = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of files) {
    const fullPath = path.join(
      NEWSLETTERS_DIR,
      file
    );

    console.log(
      `\nProcesando: ${file}`
    );

    try {
      const result =
        await mammoth.extractRawText({
          path: fullPath,
        });

      const resource =
        parseNewsletter(result.value);

      const existing =
        findExistingResource(
          knowledgeSource,
          resource
        );

      if (existing.found) {
        /**
         * Si encontramos el recurso y podemos
         * localizar el objeto completo, lo actualizamos.
         */
        if (
          existing.start !== -1 &&
          existing.end !== -1
        ) {
          const resourceText =
            formatResource(resource);

          knowledgeSource =
            knowledgeSource.slice(
              0,
              existing.start
            ) +
            resourceText.slice(
              resourceText.indexOf("{")
            ) +
            knowledgeSource.slice(
              existing.end
            );

          updated++;

          console.log(
            `Actualizado: ${resource.title}`
          );
        } else {
          skipped++;

          console.log(
            `Ya existe: ${resource.title}`
          );
        }

        continue;
      }

      /**
       * No existe: lo agregamos antes del ];
       */
      const resourceText =
        formatResource(resource);

      const closingIndex =
        knowledgeSource.lastIndexOf(
          "];"
        );

      if (closingIndex === -1) {
        throw new Error(
          "No se encontró el cierre de knowledge.ts."
        );
      }

      knowledgeSource =
        knowledgeSource.slice(
          0,
          closingIndex
        ) +
        "\n\n" +
        resourceText +
        "\n" +
        knowledgeSource.slice(
          closingIndex
        );

      imported++;

      console.log(
        `Importado: ${resource.title}`
      );
    } catch (error) {
      errors++;

      console.error(
        `ERROR en ${file}:`
      );

      console.error(
        error instanceof Error
          ? error.message
          : error
      );
    }
  }

  /**
   * Solo escribimos el archivo si hubo cambios.
   */
  if (imported > 0 || updated > 0) {
    fs.writeFileSync(
      KNOWLEDGE_FILE,
      knowledgeSource,
      "utf8"
    );
  }

  console.log(
    "\n------------------------------"
  );

  console.log(
    `Importados nuevos: ${imported}`
  );

  console.log(
    `Actualizados: ${updated}`
  );

  console.log(
    `Omitidos por existir: ${skipped}`
  );

  console.log(
    `Con error: ${errors}`
  );

  console.log(
    "------------------------------"
  );
}

main().catch((error) => {
  console.error("\nERROR:");
  console.error(
    error instanceof Error
      ? error.message
      : error
  );

  process.exit(1);
});