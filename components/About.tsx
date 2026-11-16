"use client";
import { motion } from "framer-motion";
import { Target, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  const valores = [
    "Integridad",
    "Transparencia",
    "Respeto",
    "Trabajo en equipo",
    "Compromiso",
    "Solidaridad",
    "Responsabilidad",
    "Liderazgo",
  ];

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
            Institucional
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
            ¿Quiénes Somos?
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            La Asociación Peruana de Emprendedores y Empresarios (APE) integra,
            representa y fortalece a los empresarios formales mediante el
            trabajo colaborativo, la capacitación y el diálogo institucional.
          </p>
        </div>

        {/* Tarjetas de Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Nuestra Misión</h3>
            </div>
            <p className="text-gray-300">
              Representar y fortalecer a los empresarios formales, promoviendo
              la colaboración, la innovación, la capacitación y el crecimiento
              sostenible de sus negocios.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Nuestra Visión</h3>
            </div>
            <p className="text-gray-300">
              Ser la organización empresarial más representativa, reconocida por
              impulsar una comunidad unida, competitiva y comprometida con el
              desarrollo social y económico.
            </p>
          </motion.div>
        </div>

        {/* Valores Institucionales */}
        <div className="bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-transparent border border-indigo-500/20 rounded-3xl p-6 sm:p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Valores Fundamentales
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {valores.map((valor, idx) => (
              <div
                key={idx}
                className="bg-white/5 py-3.5 px-4 rounded-xl border border-white/5 text-gray-200 font-medium text-sm flex items-center justify-center"
              >
                {valor}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Conoce nuestra estructura y objetivos institucionales
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
