import React from "react"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  position: absolute;
  height: 100vh;
  z-index: 2;
  top: 200vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20%;
  padding-right: 20%;
`

const Title = styled.h1`
  background-color: transparent;
`

const Content = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  ${mobile({ flexDirection: "column" })}
`

const CardInfo = styled.div`
  position: relative;
  z-index: 3;
  color: #f5f5f5;
  background-color: #3f62af;
  opacity: 0;
  transform: translateY(20%);
  transition: 0.5s;
`
const CardFront = styled.p`
  background: #3f62af;
  bottom: 50%;
  position: absolute;
  justify-content: center;
  width: 100%;
`

const CardImg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #3f62af;
  text-align: center;
`
const Card = styled.div`
  overflow: hidden;
  width: 190px;
  height: 254px;
  border-radius: 10px;
  padding: 1.9rem;
  background: #f5f5f5;
  position: relative;
  display: flex;
  align-items: center;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 20px rgba(43, 8, 37, 0.2);
  margin-right: 25px;
  margin-bottom: 25px;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: #3f62af;
    z-index: 2;
    transition: 0.5s;
  }
  &:hover {
    transform: translateY(5%);
    ${CardInfo} {
      opacity: 1;
      transform: translateY(0);
    }
    ${CardFront} {
      content: "";
      display: none;
      background: #3f62af;
      transition: 2s;
    }
  }
  &:hover:before {
    opacity: 1;
  }
  ${mobile({ flexDirection: "column", width: "70%", height: "50%" })}
`

const TextTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  background-color: #3f62af;
`
const TextBody = styled.p`
  letter-spacing: 1px;
  font-size: 0.9rem;
  margin: 5px 0 15px 0;
  background-color: #3f62af;
  ${mobile({ fontSize: "0.7rem" })}
`
const CardButton = styled.button`
  cursor: pointer;
  padding: 0.6rem;
  outline: none;
  border: none;
  border-radius: 4px;
  background: white;
  color: black;
  font-weight: bold;
  transition: 0.4s ease;
  &:hover:before {
    opacity: 1;
  }
  &:hover {
    background: #5b8cfc;
    color: #f5f5f5;
  }
`

const projects = () => {
  return (
    <Container id='projects'>
      <Title>Projects</Title>
      <br></br>
      <Content>
        <Card>
          <CardImg>
            <CardFront>BRxRaptors</CardFront>
          </CardImg>
          <CardInfo>
            <TextTitle>BRxRaptors</TextTitle>
            <TextBody>
              A WPF (Windows Presentation Foundation) application built using
              C#. Registered can view and edit Raptors staff and roster.
            </TextBody>
            <a
              href='https://github.com/ctapnio/Raptors_DesktopApp'
              target='_blank'
              rel='noreferrer'
            >
              {" "}
              <CardButton>Repo</CardButton>
            </a>
          </CardInfo>
        </Card>
        <Card>
          <CardImg>
            {" "}
            <CardFront>PodReco</CardFront>
          </CardImg>
          <CardInfo>
            <TextTitle>PodReco</TextTitle>
            <TextBody>
              A Spring Boot web application where anyone can recommend podcasts
              and reference them to a streaming service.
            </TextBody>
            <a
              href='https://podreco.herokuapp.com/'
              target='_blank'
              rel='noreferrer'
            >
              {" "}
              <CardButton>View</CardButton>
            </a>
          </CardInfo>
        </Card>
        <Card>
          <CardImg>
            {" "}
            <CardFront>Lampp</CardFront>
          </CardImg>
          <CardInfo>
            <TextTitle>Lampp</TextTitle>
            <TextBody>
              An Angular web application running with Spring Boot for security
              and REST APIs. Users can add posts about their software news and
              releases.
            </TextBody>
            <a
              href='https://lampp.herokuapp.com/'
              target='_blank'
              rel='noreferrer'
            >
              <CardButton>View</CardButton>
            </a>
          </CardInfo>
        </Card>
      </Content>
    </Container>
  )
}

export default projects
