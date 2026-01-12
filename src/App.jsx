
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Portfolio from './sections/Portfolio'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import GalleryPage from './pages/GalleryPage'
import Footer from './sections/Footer'
import Contact from './sections/Contact'
import { LanguageProvider } from './context/LanguageContext'

const App = () => {
  return (
    <LanguageProvider>
      <Router basename="/technometall">
        <Routes>
          <Route path="/" element={
            <>
              <Header/>
              <Hero/>
              <About/>
              <Services/>
              <Gallery/>
              <Contact/>
              <Footer/>
            </>
          } />
          <Route path="/gallery" element={
            <>
              <Header/>
              <GalleryPage/>
              <Footer/>
            </>
          } />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App
