import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-6 bg-white/80 backdrop-blur-md border-t border-gray-200 mt-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-xl gap-4 px-4">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm text-gray-700 font-medium">
            ¿Necesitas ayuda con la plataforma?
          </p>
          <p className="text-xs text-gray-500">
            Recibe asesoría técnica las 24 horas, los 7 días de la semana, los 365 días del año.
          </p>
        </div>
        <div className="flex-1 flex flex-col md:items-end text-xs text-gray-600 gap-1 text-center md:text-right">
          <span>
            <span className="font-semibold">México:</span> 800 0000 886
          </span>
          <span>
            <span className="font-semibold">Extranjero:</span> +52 800 0000 886
          </span>
          <span>
            <span className="font-semibold">Whatsapp:</span> (55) 88407721
          </span>
        </div>
      </div>
      <span className="text-[11px] text-gray-400 mt-4 text-center block">
        © {new Date().getFullYear()} Universidad del Valle de México. Todos los derechos reservados.
      </span>
    </footer>
  );
}