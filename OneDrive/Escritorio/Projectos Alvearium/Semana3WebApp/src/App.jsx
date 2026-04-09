import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SecondPage from './pages/SecondPage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  return (
    <BrowserRouter>
      {/* Barra de navegación */}
      <nav style={{
        backgroundColor: '#2c3e50',
        padding: '1rem 2rem',
        display: 'flex',
        gap: '1.5rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        flexWrap: 'wrap'
      }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          🏠 Inicio
        </Link>

        <Link
          to="/proyecto-s2"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          📊 Proyecto S2
        </Link>

        <Link
          to="/segunda"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          ℹ️ Segunda Página
        </Link>

        <Link
          to="/sobre-mi"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          👤 Sobre mí
        </Link>

        <Link
          to="/recursos"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          📚 Recursos
        </Link>
      </nav>


      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyecto-s2" element={<ProjectPage />} />
          <Route path="/segunda" element={<SecondPage />} />
          <Route path="/sobre-mi" element={<AboutPage />} />
          <Route path="/recursos" element={<ResourcesPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;