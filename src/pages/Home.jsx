import React from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const UVMLogo = () => (
  <svg width="60" height="60" viewBox="0 0 80 80" fill="none">
    <rect width="80" height="80" rx="16" fill="#BC0219" />
    <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="32" fontWeight="bold" fontFamily="Arial" dy=".3em">UVM</text>
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <Header />
      <div className="flex flex-1 items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white bg-opacity-95 rounded-2xl shadow-xl p-8 flex flex-col items-center max-w-sm w-full"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          >
            <UVMLogo />
          </motion.div>
          <motion.h1
            className="mt-6 mb-2 text-2xl font-bold text-[#BC0219] text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Portal UVM
          </motion.h1>
          <motion.p
            className="mb-8 text-gray-600 text-center text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            Accede a tu cuenta institucional
          </motion.p>
          <motion.form
            className="w-full flex flex-col gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <input
              id="usuario"
              name="usuario"
              type="text"
              autoComplete="username"
              required
              className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#BC0219] focus:ring-[#BC0219] outline-none text-sm transition"
              placeholder="Usuario"
            />
            <input
              id="contrasenia"
              name="contrasenia"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#BC0219] focus:ring-[#BC0219] outline-none text-sm transition"
              placeholder="Contraseña"
            />
            <motion.button
              type="submit"
              className="mt-2 w-full bg-[#BC0219] text-white font-semibold py-2 rounded-md hover:bg-[#a50116] transition"
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.03 }}
            >
              Iniciar sesión
            </motion.button>
          </motion.form>
          <motion.div
            className="w-full mt-6 flex flex-col gap-2 text-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <a
              href="#"
              className="text-[#BC0219] hover:underline text-center transition"
            >
              ¿Olvidaste tu contraseña?
            </a>
            <details className="bg-gray-100 rounded-md p-3 mt-2">
              <summary className="cursor-pointer font-semibold text-gray-700">
                ¿Cómo ingresar por primera vez?
              </summary>
              <div className="mt-2 text-gray-600">
                <ul className="list-disc pl-5">
                  <li>Tu usuario es tu matrícula o correo institucional.</li>
                  <li>La contraseña inicial es la proporcionada por UVM.</li>
                  <li>Si tienes problemas, contacta a soporte técnico.</li>
                </ul>
              </div>
            </details>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}