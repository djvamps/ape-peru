"use client";
import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronDown, ChevronUp } from "lucide-react";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Lista de tus fotos institucionales
  const fotos = [
    "/galeria/ape_1.jpeg",
    "/galeria/ape_2.jpeg",
    "/galeria/ape_3.jpeg",
    "/galeria/ape_4.jpeg",
    "/galeria/ape_5.jpeg",
    "/galeria/ape_6.jpeg",
    "/galeria/ape_7.jpeg",
    "/galeria/ape_8.jpeg",
    "/galeria/ape_9.jpeg",
    "/galeria/ape_10.jpeg",
    "/galeria/ape_11.jpeg",
    "/galeria/ape_12.jpeg",
    "/galeria/ape_13.jpeg",
  ];

  // Mostramos solo 3 en móvil o 4 en escritorio por defecto, y todas si se presiona expandir
  const visibleFotos = showAll ? fotos : fotos.slice(0, 4);

  return (
    <section
      id="galeria"
      className="py-20 relative overflow-hidden bg-black/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
            Registro Institucional
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3 text-white">
            Nuestras Reuniones y Dinámicas Zonales
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Momentos clave de trabajo colaborativo y articulación comercial
            entre los asociados de la APE.
          </p>
        </div>

        {/* Grid de Fotos (1 sola fila por defecto) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {visibleFotos.map((foto, index) => (
            <div
              key={index}
              onClick={() => setSelectedImg(foto)}
              className="group relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50"
            >
              <Image
                src={foto}
                alt={`Reunión institucional APE ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <ZoomIn className="w-4 h-4 text-indigo-400" />
                  <span>Ampliar imagen</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Expansor / Colapsador */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-colors"
          >
            {showAll ? (
              <>
                <span>Ver menos fotos</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Ver galería completa ({fotos.length} fotos)</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Modal / Lightbox para ver la imagen en grande */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center">
            <Image
              src={selectedImg}
              alt="Vista ampliada"
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
