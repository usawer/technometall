
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Portfolio from './sections/Portfolio'
import Services from './sections/Services'
import Working from './sections/Working'
import Footer from './sections/Footer'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import { LanguageProvider } from './context/LanguageContext'

const App = () => {
  return (
    <LanguageProvider>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </LanguageProvider>
  )
}

export default App