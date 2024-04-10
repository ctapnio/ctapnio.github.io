import styled from "styled-components";
import profPic from "../assets/profile.jpg";
const Container = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  /* background-color: #bec5cc; */
  display: flex;
  flex-direction: column; /* Set the container to a column layout */
  align-items: center;
  justify-content: center;
  text-decoration: none;
  
`;

// const AboutTitle = styled.h1`
//   margin-bottom: 1rem; /* Add margin at the bottom for separation */
// `;
const AboutPic = styled.img`
  margin-bottom: 1rem; /* Add margin at the bottom for separation */
  height: 4em;
  border-radius: 50%;
  opacity: 80%;
`;

const AboutStatement = styled.p`
  margin: 0;
  padding: 0 20vw; /* Adjust padding as needed */
  font-size: 1.50em;
  font-weight: 400; /* Adjust font weight */
  text-align: left; /* Center-align the text */

  @media (max-width: 768px) {
    padding: 0 10vw;
    font-size: 2vh;
  }

  @media (max-width: 480px) {
    padding: 0 5vw;
    font-size: 2vh;
  }
`;

const about = () => {
  return (
    <Container id="about">
      <AboutStatement>
      <AboutPic src={profPic} alt="not found"></AboutPic>
      <br></br>
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
        be used as building blocks for literally anything software related. As a
        creative junkie, I would like to pursue on learning how to use these
        building blocks as new technologies are being introduced and developed.
      </AboutStatement>
    </Container>
  );
};

export default about;
