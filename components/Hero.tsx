export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-28">

      <div className="max-w-5xl">

        <h1 className="text-6xl font-bold leading-tight text-slate-900">
          Si todo apunta a su cadena de suministro...
          <br />
          está en el lugar correcto.
        </h1>

        <p className="mt-10 text-2xl font-semibold text-slate-800">
          No es el único.
        </p>

        <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-600">
          Cada semana trabajamos con organizaciones que enfrentan situaciones
          que afectan el desempeño de sus operaciones. Algunas parecen
          similares. Muy pocas tienen la misma causa.
        </p>

        <a
          href="#situaciones"
          className="mt-14 inline-flex rounded-xl bg-slate-900 px-8 py-4 text-lg font-semibold text-white transition hover:bg-slate-700"
        >
          Explorar situaciones
        </a>

      </div>

    </section>
  );
}