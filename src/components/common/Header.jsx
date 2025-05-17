import React from "react";

const navOptions = [
  "Pórtico",
  "Renovación de Becas",
  "Opinión Estudiantil",
  "Portal de Ayuda",
];

export default function Header() {
  return (
    <header className="w-full flex justify-center items-center fixed top-6 left-0 z-20 pointer-events-none">
      <nav className="pointer-events-auto bg-white/90 backdrop-blur-md shadow-lg rounded-full flex items-center gap-4 px-8 py-2">
        {navOptions.map((option) => (
          <a
            key={option}
            href="#"
            className="text-gray-700 font-medium px-4 py-1 rounded-full hover:bg-gray-100 transition-colors text-sm"
          >
            {option}
          </a>
        ))}
      </nav>
    </header>
  );
}