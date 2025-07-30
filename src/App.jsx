import { Routes, Route } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/Portfolio'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <div id='app-container'>
      <NavBar type="nav"/>
      <main id="main-content">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} /> 
        </Routes>
      </main>
      <Footer/>  
    </div>
  )
}

export default App
