import React from "react"
import styled from "styled-components"
import moonImg from "../images/moon.png"
import treeImg from "../images/tree.png"
import tree2Img from "../images/tree2.png"
import seaImg from "../images/sea.png"
import { mobile } from "../responsive"

const Container = styled.div`
  z-index: -2;
`
const Moon = styled.img`
  width: 100vw;
  transform: translate(-7vw, 0vh);
  ${mobile({ width: "200vw" })}
`
const Tree = styled.img`
  width: 50vw;
  transform: translate(-10vw, 0vh);
  ${mobile({ width: "200vw", transform: "translate(-80vw, 0vh)" })}
`
const Tree2 = styled.img`
  width: 50vw;
  transform: translate(10vw, 30vh);
  ${mobile({ width: "200vw" })}
`
const Sea = styled.img`
  position: absolute;
  width: 100vw;
  bottom: 0;
  left: 0;
`
Moon.defaultProps = {
  src: moonImg,
}

Tree.defaultProps = {
  src: treeImg,
}

Tree2.defaultProps = {
  src: tree2Img,
}

Sea.defaultProps = {
  src: seaImg,
}

const background = () => {
  return (
    <Container>
      <Moon />
      <Tree />
      <Tree2 />
      <Sea />
    </Container>
  )
}

export default background
