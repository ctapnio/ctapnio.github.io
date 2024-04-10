import styled from "styled-components";
import { PopupButton } from "react-calendly";

const Container = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  background-color: transparent;
  display: flex;
  flex-direction: column; /* Set the container to a column layout */
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
const Title = styled.h1`
  color: #fff;
`;
const EmailButton = styled.button`
  background-color: #272b36;
  color: white;
  cursor: pointer;
  width: 100%;
  font-family: inherit;
  padding: 0.6em 1.3em;
  /* font-weight: 900; */
  font-size: 18px;
  border-radius: 2em;
  border: none;
  
`;
const EmailLink = styled.a`
  text-decoration: none;
  width: 100%;
  padding-bottom: 2.5%;
`;
const ContactWrapper = styled.div`
  width: 25%;
  /* margin: 0 auto; */
  /* padding: 0 30%; */
  display: flex;
  transition: transform ease;
  overflow: hidden;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    align-items: center; /* Adjust this property to align cards based on your preference */
    height: 40%;
    width: 50%;
  }
`;
const contact = () => {
  const Style = {
    cursor: "pointer",
    width: "100%",
    fontFamily: "inherit",
    padding: "0.6em 1.3em",
    fontSize: "1em",
    borderRadius: "2em",
    onHover: {
      opacity: 0,
    },
    backgroundColor: "#272B36",
    color: "white",
    border: "none",
  };
  return (
    <Container id="contact">
      <Title>Contact</Title>
      <ContactWrapper>
        <EmailLink href="mailto: tapnioc@sheridancollege.ca">
          {" "}
          <EmailButton>Email</EmailButton>
        </EmailLink>
        <PopupButton
          url="https://calendly.com/tapnioc/30min"
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
          text="Virtual Meeting"
          styles={Style}
        />
      </ContactWrapper>
      <p style={{position:'fixed', fontSize:"1em", bottom:0, margin:0, fontStyle:"italic"}}>Designed & developed by Christian Tapnio. ©</p>
    </Container>
  );
};

export default contact;
