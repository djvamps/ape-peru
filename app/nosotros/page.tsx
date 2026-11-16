import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  ShieldCheck,
  Target,
  Eye,
  Building2,
  Users,
  Network,
  CheckCircle2,
  Award,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros e Institucionalidad",
  description:
    "Conoce la misión, visión, objetivos, estructura organizacional y el modelo de crecimiento territorial 14x1x8 de la Asociación Peruana de Emprendedores y Empresarios (APE).",
};

export default function NosotrosPage() {
  const valores = [
    {
      titulo: "Integridad",
      desc: "Actuamos con rectitud y coherencia en cada una de nuestras iniciativas.",
    },
    {
      titulo: "Transparencia",
      desc: "Garantizamos la claridad y el libre acceso a la información de nuestra gestión.",
    },
    {
      titulo: "Respeto",
      desc: "Valoramos la diversidad y la dignidad de cada miembro y actor social.",
    },
    {
      titulo: "Trabajo en equipo",
      desc: "Sumamos esfuerzos orientados hacia un objetivo común.",
    },
    {
      titulo: "Compromiso",
      desc: "Asumimos la responsabilidad activa con el crecimiento empresarial.",
    },
    {
      titulo: "Solidaridad empresarial",
      desc: "Fomentamos el apoyo mutuo y el crecimiento colectivo de los asociados.",
    },
    {
      titulo: "Responsabilidad social",
      desc: "Buscamos un impacto positivo en la sociedad.",
    },
    {
      titulo: "Liderazgo",
      desc: "Guiamos e inspiramos el cambio hacia la competitividad comercial.",
    },
  ];

  const objetivosEspecificos = [
    "Promover la formalización empresarial.",
    "Generar alianzas estratégicas con entidades públicas y privadas.",
    "Organizar programas de capacitación integral y permanente.",
    "Impulsar el intercambio comercial interno y el consumo entre asociados.",
    "Representar y defender los intereses legítimos de los empresarios formales.",
    "Promover proyectos estructurados para el desarrollo económico local y regional.",
    "Crear espacios dinámicos de networking empresarial.",
    "Fomentar la innovación y la transformación digital en los negocios tradicionales.",
  ];

  const ventajas = [
    {
      titulo: "Representación Institucional",
      desc: "Defensa y representación de intereses colectivos ante municipalidades, ministerios y organismos reguladores bajo el marco legal.",
    },
    {
      titulo: "Mayor Fuerza como Colectivo",
      desc: "La articulación en bloque multiplica la capacidad de propuesta y negociación frente a las gestiones individuales.",
    },
    {
      titulo: "Desarrollo y Sinergia Empresarial",
      desc: "Intercambio continuo de mejores prácticas, transferencia de conocimientos y co-creación de soluciones comerciales.",
    },
    {
      titulo: "Crecimiento Comercial Sostenido",
      desc: "El ecosistema interno facilita referencias comerciales de confianza y apertura de nuevos canales de venta.",
    },
  ];

  const comites = [
    "Comité de Afiliaciones",
    "Comité de Capacitación",
    "Comité de Comunicaciones",
    "Comité Legal",
    "Comité de Relaciones Institucionales",
    "Comité de Eventos",
    "Comité de Marketing",
    "Comité de Desarrollo Empresarial",
  ];

  const fasesTerritoriales = [
    {
      fase: "Fase 1 (Piloto)",
      estructura:
        "1 Coordinador Zonal | 1 Líder Empresarial → 8 Empresas Afiliadas",
      impacto: "8 Empresas Organizadas",
    },
    {
      fase: "Fase 2",
      estructura:
        "1 Coordinador Zonal | 2 Líderes Empresariales → 16 Empresas Afiliadas",
      impacto: "16 Empresas Organizadas",
    },
    {
      fase: "Fase 3",
      estructura:
        "1 Coordinador Zonal | 5 Líderes Empresariales → 40 Empresas Afiliadas",
      impacto: "40 Empresas Organizadas",
    },
    {
      fase: "Fase 4 (Consolidación)",
      estructura:
        "1 Coordinador Zonal | 10 Líderes Empresariales → 80 Empresas Afiliadas",
      impacto: "80 Empresas por Zonal",
    },
  ];

  const compromisosAsociado = [
    "Actuar con estricta ética comercial, respeto y profesionalismo.",
    "Cumplir con el estatuto institucional y los reglamentos internos vigentes.",
    "Participar activamente en las asambleas, comités y actividades convocadas.",
    "Promover las prácticas de formalidad laboral, tributaria y municipal.",
    "Contribuir proactivamente con iniciativas enfocadas en el desarrollo integral.",
  ];

  return (
    <main className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navegación de regreso */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>

        {/* Encabezado Institucional */}
        <div className="max-w-4xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Bases y Plan de Crecimiento
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Unidos para fortalecer el desarrollo empresarial
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            La{" "}
            <strong className="text-white">
              Asociación Peruana de Emprendedores y Empresarios (APE)
            </strong>{" "}
            es una organización sin fines de lucro que busca integrar,
            representar y fortalecer a los empresarios y emprendedores formales
            mediante el trabajo colaborativo, la capacitación, la generación de
            oportunidades comerciales y el diálogo institucional. Nuestro
            propósito es construir una comunidad empresarial organizada que
            contribuya al desarrollo económico, la formalización y la mejora de
            la calidad de vida.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Misión</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Representar y fortalecer a los empresarios formales, promoviendo
              la colaboración, la innovación, la capacitación y el crecimiento
              sostenible de sus negocios, contribuyendo al desarrollo económico
              integral.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Visión</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Ser la organización empresarial más representativa, reconocida por
              impulsar una comunidad empresarial unida, competitiva y
              comprometida con el desarrollo social y económico.
            </p>
          </div>
        </div>

        {/* Valores Institucionales */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Valores Institucionales
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.titulo}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Objetivos */}
        <section className="mb-20 bg-gradient-to-br from-indigo-950/40 via-white/[0.02] to-transparent border border-indigo-500/20 rounded-3xl p-6 sm:p-10">
          <div className="mb-8">
            <span className="text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              Propósito Estratégico
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-3">
              Objetivos Institucionales
            </h2>
            <p className="text-gray-300">
              <strong className="text-white">Objetivo General:</strong>{" "}
              Representar y fortalecer a los empresarios formales mediante una
              organización sólida, democrática y altamente participativa.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-white mb-4">
            Objetivos Específicos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {objetivosEspecificos.map((obj, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/5 border border-white/5 rounded-xl p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">{obj}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Ventajas Competitivas */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Ventajas Competitivas de Pertenecer a la APE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ventajas.map((v, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-xl font-bold text-white">{v.titulo}</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Organización Institucional y Gobernanza */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Organización Institucional
          </h2>
          <p className="text-gray-300 mb-8 max-w-3xl">
            La gobernanza de la APE está diseñada para garantizar operatividad y
            representatividad efectiva a través de una estructura jerárquica y
            comisiones técnicas especializadas.
          </p>

          {/* Jerarquía */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-indigo-950/30 border border-indigo-500/30 rounded-2xl p-6 text-center">
              <Building2 className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white">Asamblea General</h3>
              <p className="text-xs text-indigo-300 mt-1">
                Máxima autoridad de la asociación
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white">
                Consejo Directivo
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Presidente • Vicepresidente • Secretario General • Tesorero •
                Vocales
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <Network className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white">Comité Ejecutivo</h3>
              <p className="text-xs text-gray-400 mt-1">
                Operación transversal y gestión técnica
              </p>
            </div>
          </div>

          {/* Comisiones Técnicas */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white mb-4">
              Comisiones Técnicas Especializadas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {comites.map((comite, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-gray-200"
                >
                  {comite}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modelo de Crecimiento Territorial */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                Estructura Escalable 14 × 1 × 8
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Modelo de Crecimiento Territorial
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-4 py-2 rounded-xl text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              Meta Global: 1,120+ Empresas Formales en 14 Zonales
            </div>
          </div>

          <div className="overflow-x-auto bg-white/5 border border-white/10 rounded-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase text-gray-400">
                  <th className="py-4 px-6">Fase / Etapa</th>
                  <th className="py-4 px-6">Estructura Organizativa Interna</th>
                  <th className="py-4 px-6">Capacidad de Impacto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm">
                {fasesTerritoriales.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="py-4 px-6 font-semibold text-white whitespace-nowrap">
                      {row.fase}
                    </td>
                    <td className="py-4 px-6 text-gray-300">
                      {row.estructura}
                    </td>
                    <td className="py-4 px-6 font-medium text-indigo-400 whitespace-nowrap">
                      {row.impacto}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Principios, Compromisos y Sostenibilidad */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-indigo-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Compromisos del Asociado
              </h2>
            </div>
            <ul className="space-y-3">
              {compromisosAsociado.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Principios Institucionales y Sucesión
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                La APE guía su funcionamiento bajo estándares de transparencia
                administrativa, fomento a la participación democrática, estricto
                apego a la normativa jurídica nacional y apertura al diálogo
                interinstitucional público-privado.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Mediante la{" "}
                <strong className="text-white">
                  Escuela de Desarrollo Empresarial
                </strong>{" "}
                y la política de relevo territorial, cada Coordinador Zonal y
                Líder Empresarial forma cuadros de sucesión en Liderazgo
                Ejecutivo, Gestión de Equipos y Representación Institucional.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
              >
                Conoce cómo integrarte a tu zonal
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
