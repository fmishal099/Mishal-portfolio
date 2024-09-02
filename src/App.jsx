import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import About from './assets/Components/About/About'
import Experience from './assets/Components/Experince/Experience'
import Services from './assets/Components/Services/Services'
import Contact from './assets/Components/Contact/Contact'
import Projects from './assets/Components/Projects/Projects'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
