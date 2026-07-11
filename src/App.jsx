// import { useState, useEffect } from 'react'
import './App.css'
import ParticleComponent from './Components/ParticleComponent'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function App() {

  return (
    <div className='relative min-h-screen m-0 p-0 box-border'>
      <ParticleComponent />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
         <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App