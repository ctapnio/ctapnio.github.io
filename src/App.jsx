// import CTapnio from "./pages/Ctapnio";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import moonPic from "./assets/moonPic.png";
import treePic from "./assets/treePic.png";
import cityPic from "./assets/vancouverPic.png";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import React, { useState } from 'react';
import Loader from "./components/loader";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div>
      <Navbar></Navbar>
      {isLoading && <Loader />}
      <Parallax pages={4}>
        <ParallaxLayer
          z-index={-2}
          speed={1}
          offset={0}
          factor={2.5}
          style={{
            backgroundColor: `#cbd1d7`,
          }}
          
        ></ParallaxLayer>
        <ParallaxLayer
          z-index={-1}
          speed={1}
          offset={0}
          factor={1.5}
          horizontal={true}
          style={{
            backgroundImage: `url(${moonPic})`,
            opacity: "0.15",
          }}
         
        ><img
        src={moonPic}
        alt="Moon"
        style={{ display: 'none' }}
        onLoad={handleImageLoad}
      /></ParallaxLayer>
        <ParallaxLayer
          speed={1}
          offset={0}
          factor={2.5}
          style={{
            backgroundColor: `transparent`,
          }}
        >
          <Home></Home>
        </ParallaxLayer>
        {/* About */}
        <ParallaxLayer
          z-index={-2}
          speed={1}
          offset={1}
          factor={2.5}
          style={{
            backgroundColor: `#bec5cc`,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          z-index={-1}
          speed={1}
          offset={1.25}
          factor={2.5}
          style={{
            backgroundImage: `url(${treePic})`,
            opacity: "0.15",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          speed={0.05}
          offset={1}
          factor={1.75}
          style={{
            backgroundColor: `transparent`,
          }}
        >
          <About></About>
        </ParallaxLayer>
        {/* Projects */}
        <ParallaxLayer
          z-index={-2}
          offset={2}
          speed={0.75}
          factor={1.15}
          style={{
            backgroundColor: `#272b36`,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.05}
          factor={1}
          style={{
            backgroundColor: `transparent`,
          }}
        >
          <Projects></Projects>
        </ParallaxLayer>

        {/* Contact */}
        <ParallaxLayer
          z-index={-2}
          offset={3}
          speed={0.75}
          factor={1}
          style={{
            backgroundColor: `#718090`,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          z-index={-1}
          speed={1}
          offset={3}
          factor={1}
          style={{
            height: "100vh",
            width: "100vw",
            backgroundImage: `url(${cityPic})`,
            backgroundSize: "cover",
            backgroundPositionY: "bottom",
            opacity: "0.25",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={3}
          style={{
            backgroundColor: `transparent`,
          }}
        >
          <Contact></Contact>
        </ParallaxLayer>
      </Parallax>
      
    </div>
  );
}

export default App;
