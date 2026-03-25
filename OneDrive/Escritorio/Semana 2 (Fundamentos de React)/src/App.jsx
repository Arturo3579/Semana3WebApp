import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0) 
  const [mensaje, setMensaje] = useState("Bienvenido a Alvearium")

  
  const colaboradores = [
    { id: 1, nombre: "Arturo", tarea: "Domino las Props" },
    { id: 2, nombre: "Guía", tarea: "Explicar el renderizado de listas" },
    { id: 3, nombre: "Tutor Museo", tarea: "Revisa el progreso de la Fase 2" }
  ]

  return (
    <>
      <section>
     
        <h1>{mensaje}</h1>
        
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '30px' }}>
          <button onClick={() => setCount((count) => count + 1)}>
            Contador: {count}
          </button>

          <button onClick={() => setMensaje("¡Objetivo Semana 2 Completado!")}>
            Finalizar Tarea
          </button>
        </div>

        <h2>Panel de Colaboradores</h2>
        
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {colaboradores.map((persona) => (
            <TarjetaInfo 
              key={persona.id} 
              nombre={persona.nombre} 
              tarea={persona.tarea} 
            />
          ))}
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Recursos de Aprendizaje</h2>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="Vite" /> Vite Docs
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="React" /> React Docs
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}


function TarjetaInfo({ nombre, tarea }) { 
  return (
    <div style={{ 
      border: '2px solid orange', 
      padding: '15px', 
      borderRadius: '12px', 
      backgroundColor: '#fffcf5',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ color: '#e67e22', margin: '0 0 10px 0' }}>👤 {nombre}</h3>
      <p style={{ color: '#333', margin: 0 }}>Trabajando en: <b>{tarea}</b></p>
    </div>
  )
}
export default App