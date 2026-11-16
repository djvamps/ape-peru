import { UploadIcon, VideoIcon, ZapIcon } from "lucide-react";

export const featuresData = [
  {
    icon: <UploadIcon className="w-6 h-6" />,
    title: "Networking y Comercialización",
    desc: "Accede a una red exclusiva de contactos, ruedas de negocios y participación preferencial en ferias comerciales.",
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    title: "Capacitación y Desarrollo",
    desc: "Programas de formación continua, charlas técnicas en materia legal, tributaria y gestión empresarial.",
  },
  {
    icon: <VideoIcon className="w-6 h-6" />,
    title: "Representación Institucional",
    desc: "Articulación gremial y defensa de los intereses de los empresarios formales ante autoridades y organismos reguladores.",
  },
];

export const plansData = [
  {
    id: "fase-1",
    name: "Fase 1: Piloto Zonal",
    price: "8 Empresas",
    desc: "Estructura inicial validada con 1 Coordinador y 1 Líder Empresarial.",
    credits: "Grupo Organizado",
    features: [
      "Networking local directo",
      "Capacitaciones técnicas básicas",
      "Participación en reuniones piloto",
      "Credencial digital de asociado",
    ],
  },
  {
    id: "fase-2",
    name: "Fase 2: Expansión",
    price: "16 Empresas",
    desc: "Crecimiento coordinado con 2 Líderes Empresariales por zona.",
    credits: "Red en Crecimiento",
    popular: true,
    features: [
      "Todo lo de la Fase 1",
      "Descuentos cruzados entre asociados",
      "Mesas de trabajo técnico",
      "Mayor exposición publicitaria",
    ],
  },
  {
    id: "fase-3-4",
    name: "Fase 3 & 4: Consolidación",
    price: "80+ Empresas",
    desc: "Red consolidada con proyección a las 14 zonales (1,120 empresas).",
    credits: "Impacto Global",
    features: [
      "Todo lo de la Fase 2",
      "Representación institucional gremial",
      "Acceso preferencial a ferias y ruedas",
      "Participación en Escuela de Liderazgo",
    ],
  },
];

export const faqData = [
  {
    question:
      "¿Quiénes pueden formar parte de la Asociación Peruana de Emprendedores y Empresarios (APE)?",
    answer:
      "Todo empresario o emprendedor formal (o en proceso de formalización) que opere en Comas y Lima, y que esté comprometido con la ética comercial, el respeto y el desarrollo económico de nuestra comunidad.",
  },
  {
    question: "¿Cuáles son los requisitos para asociarme?",
    answer:
      "Contar con DNI o RUC activo, completar el formulario digital de inscripción, aceptar los estatutos institucionales y comprometerse a participar activamente en las actividades y capacitaciones de la red.",
  },
  {
    question: "¿Qué beneficios reales obtengo al integrarme a la red?",
    answer:
      "Acceso a una red exclusiva de contactos (networking), charlas técnicas gratuitas o preferenciales en materia legal y tributaria, participación en ferias comerciales, ruedas de negocios y mayor visibilidad para tu marca.",
  },
  {
    question:
      "¿Cómo funciona el modelo de crecimiento por fases y las zonales?",
    answer:
      "Nos organizamos de manera estructurada y progresiva: comenzamos desde grupos piloto zonales de 8 empresas hasta consolidar redes de hasta 80 empresas por zonal, proyectando un total de 14 zonales articuladas en beneficio de todos los asociados.",
  },
  {
    question: "¿Qué es el Área Privada u Oficina Virtual para asociados?",
    answer:
      "Es una plataforma digital exclusiva con usuario y contraseña donde cada socio puede visualizar su credencial digital, revisar comunicados oficiales, inscribirse a eventos, acceder a materiales de capacitación y conectar con el directorio de otros empresarios.",
  },
];

export const footerLinks = [
  {
    title: "Institucional",
    links: [
      { name: "Nosotros", url: "/nosotros" },
      { name: "Beneficios", url: "/#features" },
      { name: "Fases de Crecimiento", url: "/#pricing" },
      { name: "Preguntas Frecuentes", url: "/#faq" },
    ],
  },
  {
    title: "Transparencia",
    links: [
      { name: "Estatutos y Reglamentos", url: "/nosotros" },
      { name: "Gobernanza y Comités", url: "/nosotros" },
      { name: "Compromisos del Asociado", url: "/nosotros" },
      { name: "Política de Privacidad", url: "#" },
    ],
  },
  {
    title: "Comunidad",
    links: [
      { name: "Facebook Oficial", url: "#" },
      { name: "Instagram", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "Contacto Zonal", url: "/#pricing" },
    ],
  },
];
