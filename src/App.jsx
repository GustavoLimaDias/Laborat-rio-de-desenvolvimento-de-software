import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="projetos" element={<Projects />} />
        <Route path="experiencias" element={<Experience />} />
        <Route path="contato" element={<Contact />} />
      </Route>
    </Routes>
  )
}
