"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "/1.png",
    alt: "Mesa elegante decorada para celebración"
  },
  {
    src: "/2.png",
    alt: "Salón de fiesta con luces cálidas"
  },
  {
    src: "/3.png",
    alt: "Detalle de celebración con flores"
  },
  {
    src: "/4.png",
    alt: "Brindis de invitados en fiesta"
  },
];

export default function Gallery() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-blue-200/80">
            Recuerdos
          </p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Momentos para guardar
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              {/* Replace these with real photos. */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/55 via-transparent to-white/10" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
