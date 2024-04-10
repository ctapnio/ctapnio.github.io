import styled from "styled-components";
import Home from "../components/home";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Navbar from "../components/navbar";
const Container = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scroll-snap-stop: 50s;
  max-height: 100vh;
  max-width: 100vw;
  overflow: auto;
`;

const CTapnio = () => {
  return (
    <Container>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </Container>
  );
};

export default CTapnio;
