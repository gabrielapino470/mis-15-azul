"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 13) % 84)}%`,
  top: `${12 + ((index * 17) % 74)}%`,
  delay: index * 0.28,
  size: 3 + (index % 4)
}));

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 text-center">
      {/* Replace this background image with a real portrait or event photo. */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85')"
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/68 to-midnight" />
      <div className="absolute inset-0 bg-radial-glow opacity-80" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-silver/80 shadow-glow"
          style={{
            left: particle.left,
            top: particle.top,
            height: particle.size,
            width: particle.size
          }}
          animate={{
            opacity: [0.2, 0.85, 0.2],
            scale: [1, 1.8, 1],
            y: [0, -18, 0]
          }}
          transition={{
            duration: 4.5,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-hidden="true"
        />
      ))}

      <motion.div
        className="relative z-10 mx-auto max-w-3xl"
        initial={{ opacity: 0, scale: 0.94, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <p className="mb-5 text-sm uppercase tracking-[0.45em] text-silver/90 sm:text-base">
          Mis 15 Años
        </p>
        <h1 className="font-display text-6xl font-semibold leading-none text-white drop-shadow-2xl sm:text-7xl md:text-8xl">
          Azul Pistoni
        </h1>
        <div className="mx-auto my-8 h-px w-32 bg-gradient-to-r from-transparent via-silver to-transparent" />
        <p className="font-display text-3xl text-silver sm:text-4xl">
          9 de mayo
        </p>
      </motion.div>
    </section>
  );
}
