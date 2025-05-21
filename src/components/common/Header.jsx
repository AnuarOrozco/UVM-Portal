import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navOptions = [
  "Inicio",
  "Actividad",
  "Cursos",
  "Calendario",
  "Mensajes",
  "Calificaciones",
  "Perfil",
  "Cerrar Sesión"
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex justify-center items-center fixed top-6 left-0 z-20 pointer-events-none">
      {/* Desktop nav */}
      <nav className="pointer-events-auto bg-white/90 backdrop-blur-md shadow-lg rounded-full items-center gap-2 sm:gap-4 px-3 sm:px-8 py-1.5 sm:py-2 max-w-full overflow-x-auto hidden sm:flex">
        {navOptions.map((option) => (
          <a
            key={option}
            href="#"
            className={`text-gray-700 font-medium px-3 sm:px-4 py-1 rounded-full hover:bg-gray-100 transition-colors text-xs sm:text-sm whitespace-nowrap ${
              option === "Cerrar Sesión" ? "text-red-500 hover:bg-red-50" : ""
            }`}
          >
            {option}
          </a>
        ))}
      </nav>
      {/* Mobile burger */}
      <div className="pointer-events-auto sm:hidden w-full flex justify-end pr-4">
        <button
          className="bg-white/90 backdrop-blur-md shadow-lg rounded-full p-2"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
        >
          <FiMenu className="h-6 w-6 text-gray-700" />
        </button>
      </div>
      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-30 flex items-start justify-end bg-black/30 pointer-events-auto sm:hidden">
          <div className="bg-white w-64 h-full shadow-xl flex flex-col pt-8">
            <button
              className="self-end mr-4 mb-6"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <FiX className="h-7 w-7 text-gray-700" />
            </button>
            <nav className="flex flex-col gap-2 px-6">
              {navOptions.map((option) => (
                <a
                  key={option}
                  href="#"
                  className={`text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-base ${
                    option === "Cerrar Sesión" ? "text-red-500 hover:bg-red-50" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {option}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}