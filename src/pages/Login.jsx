import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/common/Footer";
import uvmLogo from "../assets/images/universidad-del-valle-de-mexico-uvm-logo-vector.png";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center mt-12 mb-8">
        <img
          src={uvmLogo}
          alt="Universidad del Valle de México"
          className="h-36 w-auto mb-2" // Logo más grande
          draggable={false}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white border border-gray-200 rounded-xl shadow-md p-8 flex flex-col items-center max-w-md w-full"
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-1 w-full text-left">
          Portal UVM
        </h2>
        <h1 className="text-2xl font-bold text-gray-900 mb-6 w-full text-left">
          Inicia sesión con tu cuenta UVM
        </h1>
        <form className="w-full flex flex-col gap-4">
          <div className="relative">
            <input
              id="usuario"
              name="usuario"
              type="text"
              autoComplete="username"
              required
              className="block w-full rounded-lg border border-gray-300 px-3 py-3 focus:border-[#BC0219] focus:ring-[#BC0219] outline-none text-base transition placeholder-gray-400 bg-gray-50"
              placeholder="Usuario"
            />
          </div>
          <div className="relative">
            <input
              id="contrasenia"
              name="contrasenia"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              className="block w-full rounded-lg border border-gray-300 px-3 py-3 focus:border-[#BC0219] focus:ring-[#BC0219] outline-none text-base transition placeholder-gray-400 bg-gray-50 pr-12"
              placeholder="Contraseña"
            />
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#BC0219] transition p-1"
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPassword ? (
                // Ojo abierto
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                // Ojo cerrado
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95m3.249-2.568A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.043 5.032M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                </svg>
              )}
            </button>
          </div>
          <motion.button
            type="submit"
            className="mt-2 w-full bg-[#BC0219] text-white font-semibold py-2 rounded-md hover:bg-[#a50116] transition"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.01 }}
          >
            Iniciar sesión
          </motion.button>
        </form>
        <hr className="my-6 w-full border-gray-200" />
        <div className="flex flex-col md:flex-row justify-between w-full gap-2 text-xs">
          <div>
            <span>¿Olvidaste tu </span>
            <a href="#" className="text-[#BC0219] hover:underline">
              usuario
            </a>
            <span> o </span>
            <a href="#" className="text-[#BC0219] hover:underline">
              contraseña
            </a>
            <span>?</span>
          </div>
          <a href="#" className="text-[#BC0219] hover:underline md:text-right">
            ¿Necesitas ayuda?
          </a>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}