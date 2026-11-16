"use client";
import { MenuIcon, XIcon } from "lucide-react";
import { PrimaryButton } from "./Buttons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "/#features" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Beneficios", href: "/#features" },
    { name: "Asociados", href: "/#pricing" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <motion.nav
      className="fixed top-5 left-0 right-0 z-50 px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-white/85 dark:bg-black/50 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-sm rounded-2xl p-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
        <Image
  src="/logo-light.svg"
  alt="APE Logo"
  width={120}
  height={32}
  className="h-8 w-auto dark:hidden"
  priority
/>
<Image
  src="/logo.svg"
  alt="APE Logo"
  width={120}
  height={32}
  className="h-8 w-auto hidden dark:block"
  priority
/>
        </Link>

        {/* Enlaces Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-slate-950 dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Botones de Acción */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/#pricing"
            className="text-sm font-medium text-slate-700 hover:text-slate-950 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Iniciar Sesión
          </Link>
          <Link href="/#pricing">
            <PrimaryButton className="py-2.5 px-5 text-sm">
              Afíliate
            </PrimaryButton>
          </Link>
        </div>

        {/* Botón Menú Móvil */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Abrir menú"
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-gray-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4"
          >
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-200 dark:text-gray-200 hover:text-white dark:hover:text-indigo-400 active:text-indigo-500 transition-colors py-2 text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link href="/#pricing" onClick={() => setIsOpen(false)}>
                <PrimaryButton className="w-full justify-center py-3">
                  Afíliate a la APE
                </PrimaryButton>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
