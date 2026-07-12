export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-900 text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-8">

        {/* Empresa */}

        <div>

          <h3
  translate="no"
  className="text-2xl font-bold"
>
  SERVICES PROCUREMENT
</h3>

          <p className="mt-4 text-slate-300 leading-7">
            Mejorando el desempeño de la cadena de suministro mediante
            experiencia operativa, conocimiento aplicado e inteligencia
            artificial.
          </p>

        </div>

        {/* Capacidades */}

        <div>

          <h4 className="font-semibold text-lg">
            Capacidades
          </h4>

          <ul className="mt-4 space-y-3 text-slate-300">

            <li translate="no">Procurement</li>

            <li>Almacenes e Inventarios</li>

            <li>Operaciones</li>

            <li>Auditoría Logística</li>

            <li>Talento</li>

            <li translate="no">SP Knowledge</li>

          </ul>

        </div>

        {/* Sectores */}

        <div>

          <h4 className="font-semibold text-lg">
            Sectores
          </h4>

          <ul className="mt-4 space-y-3 text-slate-300">

            <li>Minería</li>

            <li>Energía</li>

            <li>Manufactura</li>

            <li>Construcción</li>

            <li>Infraestructura</li>

            <li>Logística</li>

          </ul>

        </div>

        {/* Contacto */}

        <div>

          <h4 className="font-semibold text-lg">
            Contacto
          </h4>

          <p className="mt-4 text-slate-300">
            contacto@servicesprocurement.com
          </p>

          <p className="mt-2 text-slate-300">
            Lima · Perú
          </p>

          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200">
            Hablemos
          </button>

        </div>

      </div>

      <div className="border-t border-slate-700 py-6 text-center text-sm text-slate-400">

        © 2026 Services Procurement. Todos los derechos reservados.

      </div>

    </footer>
  );
}