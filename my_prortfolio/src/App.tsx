import React from 'react'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Resume from './Components/Resume/Resume'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <>
      <Header/>
      <About/>
      <Resume/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default App