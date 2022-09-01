import React from "react"
import styled from "styled-components"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { mobile } from "../responsive"
import { Link } from "react-scroll"
import { useState } from "react"

const Container = styled.div`
  z-index: 3;
  position: fixed;
  top: 50%;
  width: 20%;
  right: 0;
  padding: 2%;
  margin: 0;
  text-align: right;
  background-color: transparent;
  font-size: 20px;
  ${mobile({
    bottom: "0",
    top: "auto",
    width: "22%",
    fontSize: "16px",
    paddingBottom: "20px",
  })}
`
const NavContainer = styled.div`
  background-color: transparent;
  padding: 2px;
`
// const NavLink = styled.a`
//   text-decoration: none;
//   background-color: transparent;
//   cursor: pointer;
//   transition: 0.5s;
//   &:hover {
//     font-size: 150%;
//     transition-timing-function: ease-in-out;
//     transition: 0.5s;
//   }
// `

const SocialLink = styled.a`
  background: none;
  background-color: transparent;
  text-decoration: none;
  &:hover {
    transition: 0.5s;
  }
`

const Navbar = () => {
  const [IsHover, SetIsHover] = useState(false)

  const handleMouseEnter = () => {
    SetIsHover(true)
  }
  const handleMouseLeave = () => {
    SetIsHover(false)
  }
  const [IsHover2, SetIsHover2] = useState(false)

  const handleMouseEnter2 = () => {
    SetIsHover2(true)
  }
  const handleMouseLeave2 = () => {
    SetIsHover2(false)
  }
  const [IsHover3, SetIsHover3] = useState(false)

  const handleMouseEnter3 = () => {
    SetIsHover3(true)
  }
  const handleMouseLeave3 = () => {
    SetIsHover3(false)
  }
  const [IsHover4, SetIsHover4] = useState(false)

  const handleMouseEnter4 = () => {
    SetIsHover4(true)
  }
  const handleMouseLeave4 = () => {
    SetIsHover4(false)
  }

  // const BoxStyle = {
  //   fontSize: IsHover ? "15px" : "20px",
  // }
  const NavLink = {
    textDecoration: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "0.5s",
    fontSize: IsHover ? "25px" : "inherit",
  }
  const NavLink2 = {
    textDecoration: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "0.5s",
    fontSize: IsHover2 ? "25px" : "inherit",
  }
  const NavLink3 = {
    textDecoration: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "0.5s",
    fontSize: IsHover3 ? "25px" : "inherit",
  }
  const NavLink4 = {
    textDecoration: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "0.5s",
    fontSize: IsHover4 ? "25px" : "inherit",
  }

  return (
    <Container>
      {/* <NavContainer>
        <NavLink href='#'>/HOME</NavLink>
      </NavContainer> */}
      {/* <NavContainer>
        <NavLink href='#aboutMe'>/ABOUT</NavLink>
      </NavContainer>
      <NavContainer>
        <NavLink href='#projects'>/PROJECTS</NavLink>
      </NavContainer>
      <NavContainer>
        <NavLink href='#contact'>/CONTACT</NavLink>
      </NavContainer> */}
      <NavContainer>
        {" "}
        <Link
          to='#'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={NavLink}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          /HOME
        </Link>
      </NavContainer>
      <NavContainer>
        {" "}
        <Link
          to='aboutMe'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={NavLink2}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          /ABOUT ME
        </Link>
      </NavContainer>
      <NavContainer>
        {" "}
        <Link
          to='projects'
          spy={true}
          smooth={true}
          offset={-15}
          duration={500}
          style={NavLink3}
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        >
          /PROJECTS
        </Link>
      </NavContainer>
      <NavContainer>
        {" "}
        <Link
          to='contact'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={NavLink4}
          onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}
        >
          /CONTACT
        </Link>
      </NavContainer>

      <SocialLink href='https://github.com/ctapnio'>
        <GitHubIcon fontSize='small' />
      </SocialLink>

      <SocialLink href='https://www.linkedin.com/in/ctapnio/'>
        {" "}
        <LinkedInIcon fontSize='small' />
      </SocialLink>
    </Container>
  )
}

export default Navbar
