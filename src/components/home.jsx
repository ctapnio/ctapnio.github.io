import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  height: 100vh;
  z-index: 2;
  top: 0;
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

const home = () => {
  return (
    <Container id='#'>
      <Title>Welcome.</Title>
      <Content>
        Hi, my name is Christian and I am a Mechanical & Software Engineering
        Technology Graduate based in Vancouver, BC. My current interests are in
        UX/UI design, database and full-stack web development.
      </Content>
    </Container>
  )
}

export default home
