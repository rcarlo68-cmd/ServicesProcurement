import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto",
  description:
    "Póngase en contacto con Services Procurement para conversar sobre Procurement, Supply Chain, Logística, Inventarios y Transformación Operacional.",
};

export default function ContactPage() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">
            CONTACTO
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            Conversemos sobre su operación.
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
            Si desea fortalecer su cadena de suministro, optimizar Procurement,
            mejorar la gestión de almacenes e inventarios o desarrollar a su
            equipo, estaremos encantados de conversar con usted.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}