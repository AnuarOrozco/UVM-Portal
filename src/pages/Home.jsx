import { motion } from 'framer-motion'
import { FiBook, FiChevronRight } from 'react-icons/fi'

const Home = () => {
  // Datos de ejemplo - reemplazar con tu API
  const courses = [
    {
      id: 1,
      name: 'Introducción a la Programación',
      professor: 'Dr. Carlos Martínez',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      name: 'Diseño de Interfaces',
      professor: 'Mtra. Ana López',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      name: 'Bases de Datos Avanzadas',
      professor: 'Ing. Jorge Sánchez',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.h1 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-3xl font-bold text-uvm-secondary mb-8 flex items-center gap-2"
      >
        <FiBook className="text-uvm-primary" /> Mis Cursos
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
          >
            {/* Imagen del curso */}
            <div className="h-40 overflow-hidden">
              <img 
                src={course.image} 
                alt={course.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenido de la card */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-uvm-secondary mb-1 line-clamp-2">
                {course.name}
              </h2>
              <p className="text-gray-600 text-sm mb-3">Prof. {course.professor}</p>
              
              <button className="flex items-center text-uvm-primary hover:text-uvm-secondary transition-colors text-sm font-medium">
                Ver curso <FiChevronRight className="ml-1" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Estado vacío */}
      {courses.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500">No tienes cursos asignados actualmente</p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Home