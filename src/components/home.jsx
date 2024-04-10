import styled from "styled-components";

const Container = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  /* background-color: #cbd1d7; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WelcomeStatement = styled.h1`
  margin: 0;
  padding: 15vw 20vw;
  font-size: 4em;

  @media (max-width: 768px) {
    padding: 10vw;
    font-size: 2.5em;
  }

  @media (max-width: 480px) {
    padding: 5vw;
    font-size: 2.5em;
  }
`;

const home = () => {
  return (
    <Container id="home">
      <WelcomeStatement>
        <i>Hi</i>, I'm Christian Tapnio - a Software Engineering Technology Graduate and freelance web developer based in Vancouver, BC. Some of my current interests include networking, computer-aided design, and full-stack web development.
      </WelcomeStatement>
    </Container>
  );
};

export default home;
