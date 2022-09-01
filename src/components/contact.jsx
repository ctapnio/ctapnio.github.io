import React from "react"
import styled from "styled-components"
import { PopupButton } from "react-calendly"
// import { useState } from "react"

const Container = styled.div`
  position: absolute;
  height: 100vh;
  z-index: 2;
  top: 300vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 20%;
  padding-right: 20%;
`

const Title = styled.h1`
  background-color: transparent;
`
const Content = styled.p`
  background-color: transparent;
`
const EmailButton = styled.button`
  cursor: pointer;
  width: 100%;
  // background: #transparent;
  font-family: inherit;
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  border: 3px solid #3f62af;
  border-radius: 0.4em;
  box-shadow: #3f62af 0.1em 0.1em;
  &:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: #3f62af 0.15em 0.15em;
  }
  &:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: #3f62af 0.05em 0.05em;
  }
`
const EmailLink = styled.a`
  background-color: transparent;
  text-decoration: none;
  width: 100%;
  height: 100%;
`
/**
 * 
 * button {
 background: #FBCA1F;
 font-family: inherit;
 padding: 0.6em 1.3em;
 font-weight: 900;
 font-size: 18px;
 border: 3px solid black;
 border-radius: 0.4em;
 box-shadow: 0.1em 0.1em;
}

button:hover {
 transform: translate(-0.05em, -0.05em);
 box-shadow: 0.15em 0.15em;
}

button:active {
 transform: translate(0.05em, 0.05em);
 box-shadow: 0.05em 0.05em;
}
 */

const Contact = () => {
  const Style = {
    cursor: "pointer",
    width: "100%",
    fontFamily: "inherit",
    padding: "0.6em 1.3em",
    fontWeight: "900",
    fontSize: "18px",
    border: "3px solid #3f62af",
    borderRadius: "0.4em",
    boxShadow: "#3f62af 0.1em 0.1em",
    onHover: {
      opacity: 0,
    },
  }

  return (
    <Container id='contact'>
      <Title>Contact</Title>
      <br></br>
      <br></br>
      <Content>
        <EmailLink href='mailto: tapnioc@sheridancollege.ca'>
          {" "}
          <EmailButton> Email</EmailButton>
        </EmailLink>

        <br></br>
        <br></br>
        <PopupButton
          url='https://calendly.com/tapnioc/30min'
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
          text='Book a virtual meeting'
          styles={Style}
        />
      </Content>
    </Container>
  )
}

export default Contact
