"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type CloudinaryUploadResult = {
  event: string;
  info?: {
    secure_url?: string;
    resource_type?: "image" | "video" | "raw" | string;
    public_id?: string;
  };
};

type CloudinaryWidget = {
  open: () => void;
  destroy: () => void;
};

type CloudinaryWidgetOptions = {
  cloudName: string;
  uploadPreset: string;
  folder: string;
  multiple: boolean;
  resourceType: "auto" | "image" | "video" | "raw";
  sources: Array<"local" | "camera" | "url" | "google_drive" | "dropbox">;
};

declare global {
  interface Window {
    cloudinary?: {
      createUploadWidget: (
        options: CloudinaryWidgetOptions,
        callback: (error: unknown, result: CloudinaryUploadResult) => void
      ) => CloudinaryWidget;
    };
  }
}

const CLOUDINARY_SCRIPT_ID = "cloudinary-upload-widget";
const CLOUDINARY_SCRIPT_SRC =
  "https://upload-widget.cloudinary.com/global/all.js";

function loadCloudinaryScript() {
  return new Promise<void>((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("Cloudinary widget can only load in the browser."));
      return;
    }

    if (window.cloudinary) {
      resolve();
      return;
    }

    const existingScript = document.getElementById(CLOUDINARY_SCRIPT_ID);

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = CLOUDINARY_SCRIPT_ID;
    script.src = CLOUDINARY_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error("Could not load the Cloudinary upload widget."));

    document.body.appendChild(script);
  });
}

export default function UploadButton() {
  const widgetRef = useRef<CloudinaryWidget | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState("Preparando subida...");

  useEffect(() => {
    let isMounted = true;

    loadCloudinaryScript()
      .then(() => {
        if (!isMounted || !window.cloudinary) {
          return;
        }

        widgetRef.current = window.cloudinary.createUploadWidget(
          {
            cloudName: "dsxub8qba",
            uploadPreset: "quince_uploads",
            folder: "quince-evento",
            multiple: true,
            resourceType: "auto",
            sources: ["local", "camera"]
          },
          (error, result) => {
            if (error) {
              setStatus("No se pudo completar la subida. Intentá nuevamente.");
              return;
            }

            if (result.event === "success") {
              setStatus("¡Gracias! Tus recuerdos se subieron correctamente.");
            }
          }
        );

        setIsReady(true);
        setStatus("Listo para subir fotos y videos.");
      })
      .catch(() => {
        if (isMounted) {
          setStatus("No se pudo cargar el botón de subida.");
        }
      });

    return () => {
      isMounted = false;
      widgetRef.current?.destroy();
      widgetRef.current = null;
    };
  }, []);

  const handleOpenWidget = useCallback(() => {
    widgetRef.current?.open();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.button
        type="button"
        onClick={handleOpenWidget}
        disabled={!isReady}
        className="min-h-14 rounded-full bg-gradient-to-r from-blue-300 via-silver to-white px-9 py-4 text-base font-semibold text-midnight shadow-glow transition disabled:cursor-not-allowed disabled:opacity-60 sm:min-h-16 sm:px-12 sm:text-lg"
        whileHover={isReady ? { scale: 1.04 } : undefined}
        whileTap={isReady ? { scale: 0.98 } : undefined}
      >
        Subir fotos y videos
      </motion.button>
      <p className="min-h-6 text-sm text-silver/75" aria-live="polite">
        {status}
      </p>
    </div>
  );
}
