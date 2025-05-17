module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores institucionales UVM
        'uvm': {
          primary: '#BC0219', // Rojo UVM principal
          secondary: '#002E5D', // Azul oscuro UVM
          accent: '#E6B220', // Dorado UVM
          light: '#F5F5F5', // Fondo claro
          dark: '#333333', // Texto oscuro
        },
        // Colores de estado
        'success': '#28a745',
        'warning': '#ffc107',
        'danger': '#dc3545',
        'info': '#17a2b8',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'uvm': '0 4px 6px -1px rgba(188, 2, 25, 0.1), 0 2px 4px -1px rgba(188, 2, 25, 0.06)',
        'uvm-lg': '0 10px 15px -3px rgba(188, 2, 25, 0.1), 0 4px 6px -2px rgba(188, 2, 25, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Para estilizar formularios
    require('@tailwindcss/typography'), // Para mejor tipografía
  ],
}