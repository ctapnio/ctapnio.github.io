import React from "react"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  position: absolute;
  height: 100vh;
  z-index: 2;
  top: 100vh;
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
  ${mobile({ fontSize: "12px" })}
`

const about = () => {
  return (
    <Container id='aboutMe'>
      <Title>About Me</Title>
      <Content>
        In 2017, I received my advanced diploma in Mechanical Engineering-
        Design & Drafting from Sheridan College and started working as a
        Mechanical Technician for a manufacturing company. At that time, I was
        able to gain hands on experience with testing & assembling injection
        mold machinery. I saw the impact of automation as my team had built
        machinery that was able to perform with minimal maintenance from machine
        operators. This had then sparked my interest in automating and building
        software that makes an impact to its users. In 2019, I continued my
        academic journey by enrolling to a college program that specializes in
        software development. Thus far, it has been a rollercoaster of an
        experience and I am forever grateful. The aspect that I admire the most
        about this field is the immense amount of resources available online to
        be used a building blocks for literally anything software related. As a
        creative junkie, I would like to pursue on learning how to use these
        building blocks as new technologies are being introduced and developed.
      </Content>
    </Container>
  )
}

export default about
