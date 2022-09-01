import React from "react"
import Background from "../components/background"
import Navbar from "../components/navbar"
import Home from "../components/home"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 400vh;
  max-width: 100vw;
  max-height: 400vh;
  overflow: hidden;
`

const CTapnio = () => {
  return (
    <Container>
      <Background />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </Container>
  )
}

export default CTapnio
