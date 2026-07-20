"use client";

type Message = {
  role: string;
  side: "left" | "right";
  message: string;
  highlight?: boolean;
};

const conversation: Message[] = [
  {
    role: "Producción",
    side: "left",
    message: "La parada comienza mañana y aún faltan los repuestos críticos.",
  },
  {
    role: "Mantenimiento",
    side: "right",
    message: "Tengo dos equipos detenidos esperando materiales.",
  },
  {
    role: "Supply Chain",
    side: "left",
    message: "SAP muestra stock disponible, pero físicamente no aparece.",
  },
  {
    role: "Compras",
    side: "right",
    message: "El proveedor confirma el despacho. Necesitamos verificar qué ocurrió.",
  },
  {
    role: "Gerencia",
    side: "left",
    message: "¿Cómo evitamos que esta conversación vuelva a repetirse el próximo mes?",
    highlight: true,
  },
];

export default function OperationsConversation() {
  return (
    <section className="bg-slate-900 py-24">
  <div className="mx-auto max-w-6xl px-6">

    <div className="mx-auto mb-16 max-w-3xl text-center">

      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
        Reunión de Operaciones
      </span>

      <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
        Una conversación que hemos escuchado{" "}
        <span className="text-cyan-400">demasiadas veces.</span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-300">
        Estas frases no son ficticias. Son conversaciones que se repiten
        diariamente cuando las áreas trabajan desconectadas.
      </p>

    </div>

    <div className="flex flex-col gap-6">
              {conversation.map((item, index) => (
        <div
  key={index}
  className={`flex ${
    item.side === "left" ? "justify-start" : "justify-end"
  } ${index > 0 ? "-mt-2" : ""}`}
>
          <div className="w-full max-w-md">

            <div
              className={`mb-2 flex items-center gap-2 ${
                item.side === "right" ? "justify-end" : ""
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-xl">
  {item.role === "Producción" && "🏭"}
  {item.role === "Mantenimiento" && "🔧"}
  {item.role === "Supply Chain" && "🚚"}
  {item.role === "Gerencia" && "🎯"}
</div>

              <span className="font-semibold uppercase tracking-wide text-cyan-300">
                {item.role}
              </span>
            </div>

            <div
              className={`rounded-2xl px-6 py-4 shadow-lg transition-all ${
                item.highlight
  ? "bg-amber-500 text-slate-900"
  : item.side === "left"
    ? "rounded-tl-sm bg-slate-800"
    : "rounded-tr-sm bg-cyan-600"
              }`}
            >
              <p className="leading-7 text-white">
                {item.message}
              </p>
            </div>

          </div>
        </div>
      ))}
          </div>

    <div className="mx-auto mt-20 max-w-3xl text-center">

      <p className="text-2xl font-light leading-relaxed text-slate-300">
        Estas conversaciones no comienzan el día de la reunión.
      </p>

      <p className="mt-3 text-2xl font-bold text-white">
        Comienzan semanas antes.
      </p>

      <p className="mt-3 text-lg text-cyan-400">
        Ahí es donde trabajamos.
      </p>

    </div>

    <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-cyan-500/30 bg-slate-800 p-10 text-center shadow-2xl">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Services Procurement
      </p>

      <h3 className="mt-5 text-3xl font-bold text-white">
        No venimos a explicar por qué ocurrió.
      </h3>

      <p className="mt-4 text-xl text-slate-300">
        Venimos a evitar que vuelva a ocurrir.
      </p>

    </div>

  </div>
</section>
  );
}