"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="absolute inset-x-10 top-16 h-40 rounded-full bg-blue-400/10 blur-3xl" />
      <motion.div
        className="relative mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.06] px-7 py-10 text-center shadow-silver backdrop-blur-md sm:px-12 sm:py-14"
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="font-display text-2xl leading-relaxed text-balance text-moon sm:text-3xl sm:leading-relaxed">
          Hoy comienza una noche que soñé mil veces.
          <br />
          Gracias por estar acá, por acompañarme en este momento tan especial.
          <br />
          Cada sonrisa, cada abrazo y cada recuerdo que creemos juntos va a
          quedar para siempre en mi corazón.
        </p>
      </motion.div>
    </section>
  );
}
