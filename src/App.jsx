import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import CoolOrgs from './pages/CoolOrgs.jsx'
import Plates from './pages/Plates.jsx'

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cool-orgs" element={<CoolOrgs />} />
          <Route path="/plates" element={<Plates />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
