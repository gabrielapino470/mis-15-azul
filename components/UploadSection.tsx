"use client";

import { motion } from "framer-motion";
import UploadButton from "./UploadButton";

export default function UploadSection() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-3xl" />
      <motion.div
        className="relative mx-auto max-w-4xl rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/[0.12] via-white/[0.07] to-blue-400/[0.08] px-7 py-12 text-center shadow-glow backdrop-blur-lg sm:px-12 sm:py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-blue-200/80">
          Compartí recuerdos
        </p>
        <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">
          Compartí tus fotos y videos de esta noche
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-silver/85 sm:text-lg">
          Ayudanos a guardar cada momento inolvidable
        </p>
        <div className="mt-9">
          <UploadButton />
        </div>
      </motion.div>
    </section>
  );
}
