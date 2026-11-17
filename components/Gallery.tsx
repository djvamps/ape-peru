"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  GalleryHorizontalEnd,
} from "lucide-react";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [viewAllGrid, setViewAllGrid] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const fotos = [
    "/galeria/ape_1.jpeg",
    "/galeria/ape_2.jpeg",
    "/galeria/ape_10.jpeg",
    "/galeria/ape_11.jpeg",
    "/galeria/ape_7.jpeg",
    "/galeria/ape_13.jpeg",
  ];

  // Desplazamiento suave del carrusel con botones en escritorio
  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % fotos.length : null));
  }, [fotos.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + fotos.length) % fotos.length : null
    );
  }, [fotos.length]);

  // Navegación con teclado en el modal ampliado
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  // Gestos táctiles (Swipe) en el modal ampliado
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    setTouchStartX(null);
  };

  return (
    <section
      id="galeria"
      className="py-20 relative overflow-hidden bg-black/5 dark:bg-black/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado y controles */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              Comunidad en Acción
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Galería Institucional
            </h2>
            <p className="text-sm opacity-75 mt-1">
              Explora nuestros encuentros empresariales o haz clic en cualquier foto para ampliarla.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {/* Flechas elegantes para escritorio (solo en modo carrusel) */}
            {!viewAllGrid && (
              <div className="hidden sm:flex items-center gap-1.5 mr-2">
                <button
                  onClick={() => scrollCarousel("left")}
                  aria-label="Desplazar izquierda"
                  className="p-2.5 rounded-full border border-black/15 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollCarousel("right")}
                  aria-label="Desplazar derecha"
                  className="p-2.5 rounded-full border border-black/15 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 transition"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            <button
              onClick={() => setViewAllGrid(!viewAllGrid)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-black/15 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              {viewAllGrid ? (
                <>
                  <GalleryHorizontalEnd className="w-4 h-4" />
                  Vista Carrusel
                </>
              ) : (
                <>
                  <LayoutGrid className="w-4 h-4" />
                  Ver todas ({fotos.length})
                </>
              )}
            </button>
          </div>
        </div>

        {/* Vista Carrusel Limpio (sin barra de scroll visible) */}
        {!viewAllGrid ? (
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {fotos.map((src, index) => (
              <div
                key={src}
                onClick={() => setSelectedIndex(index)}
                className="group relative flex-none w-[78%] sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer snap-start border border-black/10 dark:border-white/10 bg-neutral-900 shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Evento APE Perú ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="text-xs font-medium text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
                    {index + 1} / {fotos.length}
                  </span>
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Vista Cuadrícula Completa */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {fotos.map((src, index) => (
              <div
                key={src}
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-black/10 dark:border-white/10 bg-neutral-900 shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Evento APE Perú ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Lightbox con Swipe móvil + Flechas y Teclado en escritorio */}
      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none"
        >
          <div className="absolute top-5 left-5 text-white/80 text-sm font-medium bg-white/10 px-3.5 py-1.5 rounded-full">
            {selectedIndex + 1} / {fotos.length}
          </div>

          <button
            onClick={() => setSelectedIndex(null)}
            aria-label="Cerrar galería"
            className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Foto anterior"
            className="absolute left-3 sm:left-6 z-10 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl h-[75vh] sm:h-[82vh]"
          >
            <Image
              src={fotos[selectedIndex]}
              alt={`Evento APE Perú ${selectedIndex + 1}`}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Foto siguiente"
            className="absolute right-3 sm:right-6 z-10 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}