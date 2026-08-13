"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  position: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  position: "",
  service: "",
  message: "",
};
export default function ContactForm() {
    const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Ocurrió un error."
        );
      }

      setSuccess(
        "Gracias. Hemos recibido su solicitud y nos pondremos en contacto con usted muy pronto."
      );

      setForm(initialForm);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No fue posible enviar el formulario."
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <section
      id="formulario"
      className="relative overflow-hidden bg-[#070A0F] py-20 lg:py-24"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-[#D4AF37]/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-white/[0.03] blur-3xl" />

      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10 xl:px-12">

        {/* Header */}

        <div className="max-w-3xl">

          <div className="mb-8 flex items-center gap-4">

            <div className="h-px w-16 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              CONTACTO
            </span>

          </div>

          <h2 className="text-[clamp(2.4rem,4vw,4rem)] font-light leading-tight tracking-[-0.04em] text-white">

            Iniciemos una
            <br />
            conversación.

          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">

            Complete el siguiente formulario.
            Nos pondremos en contacto para comprender
            sus desafíos y explorar oportunidades de mejora
            para su cadena de suministro.

          </p>

        </div>

        {/* Content */}

        <div className="mt-20 grid gap-14 lg:grid-cols-12">

          {/* Left */}

          <aside className="min-w-0 lg:col-span-4">

            <div className="p-2">

              <h3 className="text-2xl font-light text-white">
                Información de contacto
              </h3>

              <div className="mt-10 space-y-8">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">

                    <Mail size={20} />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
  Email comercial
</p>

<a
  href="mailto:contacto@servicesprocurementpe.com"
  className="mt-2 block max-w-full break-all text-white transition hover:text-[#D4AF37]"
>
  contacto@servicesprocurementpe.com
</a>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">

                    <Phone size={20} />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
  Teléfono
</p>

<a
  href="tel:+51953449850"
  className="mt-2 block text-white transition hover:text-[#D4AF37]"
>
  +51 953 449 850
</a>

                  </div>

                </div>
                                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">

                    <Mail size={20} />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
  Email directo
</p>

<a
  href="mailto:rcabrera@servicesprocurementpe.com"
  className="mt-2 block max-w-full break-all text-white transition hover:text-[#D4AF37]"
>
  rcabrera@servicesprocurementpe.com
</a>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">

                    <MapPin size={20} />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                      Ubicación
                    </p>

                    <p className="mt-2 text-white">
  Lima, Perú
</p>
<a
  href="https://wa.me/51953449850?text=Hola%20Ricardo,%20quisiera%20conocer%20más%20sobre%20Services%20Procurement."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-12 flex h-14 w-full items-center justify-center rounded-2xl bg-[#25D366] text-white font-semibold transition hover:bg-[#20BE5A]"
>
  Hablemos por WhatsApp
</a>

                  </div>

                </div>

              </div>

            </div>

          </aside>

          {/* Form */}

          <div id="diagnostico" className="min-w-0 lg:col-span-8">

            <form
  onSubmit={handleSubmit}
  className="w-full min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 backdrop-blur-sm"
>

              <div className="grid min-w-0 gap-6 md:grid-cols-2">

                <input
  type="text"
  name="name"
  value={form.name}
  onChange={handleChange}
  placeholder="Nombre completo"
  className="w-full min-w-0 rounded-2xl border border-white/10 bg-[#0C1016] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-[#D4AF37]"
/>

                <input
  type="text"
  name="company"
  value={form.company}
  onChange={handleChange}
  placeholder="Empresa"
  className="w-full min-w-0 rounded-2xl border border-white/10 bg-[#0C1016] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-[#D4AF37]"
/>

                <input
  type="email"
  name="email"
  value={form.email}
  onChange={handleChange}
  placeholder="Correo electrónico"
  className="w-full min-w-0 rounded-2xl border border-white/10 bg-[#0C1016] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-[#D4AF37]"
/>

                <input
  type="tel"
  name="phone"
  value={form.phone}
  onChange={handleChange}
  placeholder="Teléfono"
  className="w-full min-w-0 rounded-2xl border border-white/10 bg-[#0C1016] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-[#D4AF37]"
/>

                <input
  type="text"
  name="position"
  value={form.position}
  onChange={handleChange}
  placeholder="Cargo"
  className="w-full min-w-0 rounded-2xl border border-white/10 bg-[#0C1016] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-[#D4AF37]"
/>

                <select
                  className="w-full min-w-0 rounded-2xl border border-white/10 bg-[#0C1016] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-[#D4AF37]"
                  name="service"
value={form.service}
onChange={handleChange}
                >
                  <option value="" disabled>
                    Área de interés
                  </option>

                  <option>Modelo SP6</option>
                  <option>Consultoría</option>
                  <option>Auditoría Logística</option>
                  <option>SP Knowledge</option>
                  <option>Capacitación</option>
                  <option>Otro</option>

                </select>

                <textarea
  name="message"
  value={form.message}
  onChange={handleChange}
  rows={7}
  placeholder="Cuéntenos brevemente sobre su organización, sus desafíos o el objetivo de la conversación."
  className="col-span-full w-full min-w-0 resize-none rounded-2xl border border-white/10 bg-[#0C1016] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-[#D4AF37]"
/>
                
                 </div> 
                 <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <p className="max-w-md text-sm leading-7 text-slate-400">
                  Al enviar este formulario nos pondremos en contacto para
                  coordinar una conversación y comprender mejor el contexto de
                  su organización.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="
  inline-flex
  h-14
  w-full
  min-w-0
  items-center
  justify-center
  rounded-full
  bg-[#D4AF37]
  px-6
  text-[15px]
  font-semibold
  text-[#111111]
  transition-all
  duration-300
  hover:brightness-110
  hover:scale-[1.02]
  disabled:cursor-not-allowed
  disabled:opacity-60
  lg:w-auto
  lg:px-10
"
                >
                  {loading ? "Enviando..." : "Iniciar la conversación"}
                </button>
                <p className="mt-4 text-center text-sm text-slate-500 lg:hidden">
  Respondemos normalmente en menos de 24 horas hábiles.
</p>
{success && (
  <p className="mt-4 text-sm text-green-400">
    {success}
  </p>
)}

{error && (
  <p className="mt-4 text-sm text-red-400">
    {error}
  </p>
)}

              </div>
              <p className="mt-5 hidden text-sm text-slate-500 lg:block">
  Respondemos normalmente en menos de 24 horas hábiles.
</p>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}