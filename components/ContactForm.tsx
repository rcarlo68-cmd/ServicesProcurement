"use client";

import { useState } from "react";

const services = [
  "Procurement",
  "Supply Chain",
  "Warehousing & Inventory",
  "Operational Excellence",
  "Logistics Audit",
  "Coaching Ejecutivo",
  "Libro",
  "Otro",
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setLoading(false);

    if (response.ok) {
      alert(
        "Gracias por contactarnos. Hemos recibido su solicitud y nos comunicaremos con usted a la brevedad."
      );

      form.reset();
    } else {
      alert(
        "Ocurrió un problema al enviar el formulario. Inténtelo nuevamente."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Nombre completo *
          </label>

          <input
            required
            name="name"
            type="text"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Empresa *
          </label>

          <input
            required
            name="company"
            type="text"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Cargo
          </label>

          <input
            name="position"
            type="text"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Correo electrónico *
          </label>

          <input
            required
            name="email"
            type="email"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Teléfono
          </label>

          <input
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            País
          </label>

          <input
            name="country"
            type="text"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Servicio de interés
        </label>

        <select
          name="service"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
        >
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Mensaje *
        </label>

        <textarea
          required
          name="message"
          rows={6}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-slate-600">
        <input
          required
          type="checkbox"
          name="privacy"
          className="mt-1"
        />

        <span>
          He leído y acepto la Política de Privacidad de Services Procurement.
        </span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-slate-900 px-6 py-4 text-lg font-semibold text-white transition hover:bg-cyan-600 disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Solicitar una reunión"}
      </button>
    </form>
  );
}