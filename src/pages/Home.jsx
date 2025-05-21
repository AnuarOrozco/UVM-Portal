import { motion } from 'framer-motion'
import { FiBook, FiChevronRight, FiClock, FiAlertCircle, FiEdit, FiCalendar, FiFileText } from 'react-icons/fi'

const Home = () => {
  // Datos de ejemplo - cursos
  const courses = [
    {
      id: 1,
      name: 'Introducción a la Programación',
      professor: 'Dr. Carlos Martínez',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      progress: 75
    },
    {
      id: 2,
      name: 'Diseño de Interfaces',
      professor: 'Mtra. Ana López',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      progress: 40
    },
    {
      id: 3,
      name: 'Bases de Datos Avanzadas',
      professor: 'Ing. Jorge Sánchez',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      progress: 90
    },
  ]

  // Datos de ejemplo - actividad reciente
  const recentActivity = [
    {
      id: 1,
      type: 'assignment',
      course: 'Bases de Datos Avanzadas',
      title: 'Tarea 3 - Normalización',
      date: new Date(Date.now() - 86400000), // Ayer
      dueDate: new Date(Date.now() + 6 * 86400000), // En 6 días
      professor: 'Ing. Jorge Sánchez',
      read: false
    },
    {
      id: 2,
      type: 'material',
      course: 'Diseño de Interfaces',
      title: 'Nuevo material subido',
      date: new Date(Date.now() - 2 * 86400000), // Hace 2 días
      description: 'Lectura sobre Principios de UX/UI',
      professor: 'Mtra. Ana López',
      read: true
    },
    {
      id: 3,
      type: 'announcement',
      course: 'Introducción a la Programación',
      title: 'Clase cancelada',
      date: new Date(Date.now() - 3 * 86400000), // Hace 3 días
      description: 'La clase del viernes 24 de noviembre se cancela',
      professor: 'Dr. Carlos Martínez',
      read: true
    },
    {
      id: 4,
      type: 'grade',
      course: 'Bases de Datos Avanzadas',
      title: 'Calificación publicada',
      date: new Date(Date.now() - 4 * 86400000), // Hace 4 días
      description: 'Tarea 2 - Modelo relacional: 9.5',
      professor: 'Ing. Jorge Sánchez',
      read: false
    }
  ]

  // Función para formatear fechas
  const formatDate = (date) => {
    const options = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
    return date.toLocaleDateString('es-MX', options)
  }

  // Función para días restantes
  const daysRemaining = (dueDate) => {
    const diff = dueDate - new Date()
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  }

  // Icono y color según tipo de actividad
  const getActivityConfig = (type) => {
    switch(type) {
      case 'assignment':
        return { icon: <FiFileText />, color: 'text-red-500', bg: 'bg-red-50' }
      case 'material':
        return { icon: <FiBook />, color: 'text-blue-500', bg: 'bg-blue-50' }
      case 'announcement':
        return { icon: <FiAlertCircle />, color: 'text-yellow-500', bg: 'bg-yellow-50' }
      case 'grade':
        return { icon: <FiEdit />, color: 'text-green-500', bg: 'bg-green-50' }
      default:
        return { icon: <FiClock />, color: 'text-gray-500', bg: 'bg-gray-50' }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 max-w-7xl"
    >
      {/* Bienvenida */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl font-bold text-uvm-secondary">Bienvenido de vuelta</h1>
        <p className="text-gray-600">Aquí está tu resumen académico</p>
      </motion.div>

      {/* Sección de Cursos */}
      <section className="mb-14">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-uvm-secondary flex items-center gap-2">
            <FiBook className="text-uvm-primary" /> Mis Cursos
          </h2>
          <button className="text-sm text-uvm-primary hover:text-uvm-secondary font-medium">
            Ver todos →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all"
            >
              {/* Imagen del curso */}
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={course.image} 
                  alt={course.name}
                  className="w-full h-full object-cover"
                />
                {/* Barra de progreso */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-200">
                  <div 
                    className="h-full bg-uvm-primary transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Contenido de la card */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-uvm-secondary mb-1 line-clamp-2">
                  {course.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">Prof. {course.professor}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <FiClock className="mr-1" />
                    <span>{course.progress}% completado</span>
                  </div>
                  
                  <button className="flex items-center text-uvm-primary hover:text-uvm-secondary transition-colors text-sm font-medium">
                    Entrar <FiChevronRight className="ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección de Actividad Reciente */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-uvm-secondary flex items-center gap-2">
            <FiClock className="text-uvm-primary" /> Actividad Reciente
          </h2>
          <button className="text-sm text-uvm-primary hover:text-uvm-secondary font-medium">
            Ver historial completo →
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          {recentActivity.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No hay actividad reciente para mostrar
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {recentActivity.map((activity, index) => {
                const { icon, color, bg } = getActivityConfig(activity.type)
                
                return (
                  <motion.li
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`p-5 hover:bg-gray-50 transition-colors ${!activity.read ? 'bg-blue-50/30' : ''}`}
                  >
                    <div className="flex gap-4">
                      {/* Icono */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${bg} flex items-center justify-center ${color}`}>
                        {icon}
                      </div>

                      {/* Contenido */}
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                          <h3 className={`font-medium ${!activity.read ? 'text-blue-800' : 'text-gray-900'}`}>
                            {activity.title}
                          </h3>
                          <span className="text-xs text-gray-500">
                            {formatDate(activity.date)}
                          </span>
                        </div>

                        <p className="text-sm text-uvm-secondary mb-1">
                          {activity.course} • {activity.professor}
                        </p>
                        
                        {activity.description && (
                          <p className="text-gray-600 text-sm mt-1">
                            {activity.description}
                          </p>
                        )}
                        
                        {activity.dueDate && (
                          <div className="mt-2 flex items-center gap-2 text-xs font-medium">
                            <span className={`px-2 py-1 rounded-full ${daysRemaining(activity.dueDate) <= 3 ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'}`}>
                              {daysRemaining(activity.dueDate) <= 0 
                                ? 'Vencido' 
                                : `Vence en ${daysRemaining(activity.dueDate)} día${daysRemaining(activity.dueDate) !== 1 ? 's' : ''}`
                              }
                            </span>
                            <span className="text-gray-500">
                              {formatDate(activity.dueDate)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.li>
                )
              })}
            </ul>
          )}
        </div>
      </section>

      {/* Recordatorios importantes (solo si hay actividades pendientes) */}
      {recentActivity.some(a => a.type === 'assignment' && a.dueDate && daysRemaining(a.dueDate) <= 7) && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-red-50 border border-red-100 rounded-xl p-5 mb-10"
        >
          <h3 className="text-lg font-semibold text-red-800 flex items-center gap-2 mb-3">
            <FiAlertCircle className="text-red-500" /> Recordatorios importantes
          </h3>
          
          <ul className="space-y-3">
            {recentActivity
              .filter(a => a.type === 'assignment' && a.dueDate && daysRemaining(a.dueDate) <= 7)
              .map(assignment => (
                <li key={assignment.id} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 text-red-500">
                    <FiFileText />
                  </div>
                  <div>
                    <p className="text-red-800 font-medium">{assignment.title}</p>
                    <p className="text-sm text-red-600">
                      {assignment.course} • Vence {daysRemaining(assignment.dueDate) <= 0 
                        ? 'hoy' 
                        : `en ${daysRemaining(assignment.dueDate)} día${daysRemaining(assignment.dueDate) !== 1 ? 's' : ''}`
                      }
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </motion.section>
      )}
    </motion.div>
  )
}

export default Home