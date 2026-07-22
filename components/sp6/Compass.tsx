import SP6Compass from "@/components/SP6Compass";

export default function Compass() {
  return (
    <section
      id="compass"
      className="border-b border-slate-200 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Modelo Integrado
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Los seis pilares trabajan como un sistema
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            El verdadero valor del Modelo SP6 no reside en la fortaleza de un
            proceso aislado, sino en la interacción coordinada de sus seis
            capacidades. La metodología propone comprender la cadena de
            suministro como un sistema integrado donde cada decisión influye
            sobre el desempeño global de la organización.
          </p>
        </div>

        <div className="mt-20 flex justify-center">
          <SP6Compass />
        </div>

        <div className="mx-auto mt-20 max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 lg:p-10">
            <h3 className="text-xl font-semibold text-slate-900">
              Una visión sistémica de la cadena de suministro
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Cada pilar aporta capacidades específicas; sin embargo, el Modelo
              SP6 alcanza su mayor potencial cuando Procurement, Auditoría
              Logística, Operaciones y Distribución, Almacenes e Inventarios,
              Desarrollo del Talento y SP Knowledge trabajan de forma
              coordinada.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Esta integración permite comprender las relaciones entre procesos,
              priorizar oportunidades de mejora y fortalecer la cadena de
              suministro desde una perspectiva estratégica y sostenible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}