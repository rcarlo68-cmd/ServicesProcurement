import SP6Compass from "./SP6Compass";

export default function SP6() {
  return (
    <section
      id="sp6"
      className="border-y border-slate-200 bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-8">

        <p className="text-center text-sm font-semibold uppercase tracking-[0.4em] text-cyan-600">
          MODELO SP6
        </p>

        <h2 className="mt-5 text-center text-5xl font-bold tracking-tight text-slate-900">
          Seis capacidades.
          <br />
          Un solo propósito.
        </h2>

        <p className="mx-auto mt-7 max-w-3xl text-center text-xl leading-8 text-slate-600">
          Mejorar el desempeño de la cadena de suministro mediante
          conocimiento aplicado, experiencia operativa e inteligencia artificial.
        </p>

        <div className="mt-24">
          <SP6Compass />
        </div>

      </div>
    </section>
  );
}