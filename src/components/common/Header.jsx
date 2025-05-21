import React, { useState } from "react";
import { FiMenu, FiX, FiHome, FiBook, FiCalendar, FiMessageSquare, FiAward, FiUser, FiLogOut } from "react-icons/fi";
import uvmLogo from "../../assets/images/universidad-del-valle-de-mexico-uvm-logo-vector.png";

const navItems = [
  { name: "Inicio", icon: <FiHome />, path: "/" },
  { name: "Cursos", icon: <FiBook />, path: "/cursos" },
  { name: "Calendario", icon: <FiCalendar />, path: "/calendario" },
  { name: "Mensajes", icon: <FiMessageSquare />, path: "/mensajes" },
  { name: "Calificaciones", icon: <FiAward />, path: "/calificaciones" },
  { name: "Perfil", icon: <FiUser />, path: "/perfil" },
  { name: "Cerrar Sesión", icon: <FiLogOut />, path: "/logout", isLogout: true }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Inicio");

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between h-20">
          {/* Logo UVM */}
          <div className="flex items-center">
            <img 
              src={uvmLogo} 
              alt="Logo UVM" 
              className="h-12 mr-6" 
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  activeItem === item.name 
                    ? 'bg-uvm-primary/10 text-uvm-primary font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                } ${
                  item.isLogout ? 'text-red-500 hover:bg-red-50' : ''
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-16">
          {/* Logo UVM */}
          <img 
            src={uvmLogo} 
            alt="Logo UVM" 
            className="h-10" 
          />

          {/* Mobile Menu Button */}
          <button
            className="p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <FiMenu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {open && (
          <div className="fixed inset-0 z-50 bg-black/30 md:hidden">
            <div className="bg-white w-4/5 h-full shadow-xl flex flex-col">
              {/* Header with Close Button */}
              <div className="flex items-center justify-between p-4 border-b">
                <img 
                  src={uvmLogo} 
                  alt="Logo UVM" 
                  className="h-10" 
                />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <FiX className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <nav className="flex-1 overflow-y-auto py-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className={`flex items-center px-6 py-3 text-lg ${
                      activeItem === item.name 
                        ? 'bg-uvm-primary/10 text-uvm-primary font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    } ${
                      item.isLogout ? 'text-red-500 hover:bg-red-50' : ''
                    }`}
                    onClick={() => {
                      setActiveItem(item.name);
                      setOpen(false);
                    }}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="w-1/5" onClick={() => setOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
}