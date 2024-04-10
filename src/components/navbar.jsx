import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Container = styled.nav`
  background-color: transparent;
  position: sticky;
  overflow-x: hidden; /* Disable horizontal scroll */
  height: 100vh; /* Full-height: remove this if you want "auto" height */
  width: 200px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0; /* Stay at the right side */
  background-color: transparent;
  padding: 0px 0;

  @media (max-width: 768px) {
    display: none;
  }
`;
const animatedStyle = {
  backgroundColor: "transparent",
};

const LinkContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 120%;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 2em;
  display: block; /* Ensure each link takes the full width */
  margin-bottom: 10px; /* Add some spacing between links */
  /* font-weight: bold; */
  color: black;
  &:hover {
    transition: ease-in-out 0.1s;
    font-style: italic;
  }
`;

const SocialLink = styled.a`
  background: none;
  background-color: transparent;
  text-decoration: none;
  color: black;
  &:hover {
    transition: 0.5s;
  }
  &:visited, &::after {
    background: none;
    background-color: transparent;
    text-decoration: none;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <LinkContainer>
        <Link href="#home">HOME</Link>
        <Link href="#about">ABOUT</Link>
        <Link href="#projects">PROJECTS</Link>
        <Link href="#contact">CONTACT</Link>
        <SocialLink href="https://github.com/ctapnio" target="_blank">
          <GitHubIcon fontSize="small" style={animatedStyle} />
        </SocialLink>

        <SocialLink href="https://www.linkedin.com/in/ctapnio/" target="_blank">
          {" "}
          <LinkedInIcon fontSize="small" style={animatedStyle} />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/ctaipan/" target="_blank">
          {" "}
          <InstagramIcon fontSize="small" style={animatedStyle} />
        </SocialLink>
        <SocialLink href="https://twitter.com/ctapnio_" target="_blank">
          {" "}
          <TwitterIcon fontSize="small" style={animatedStyle} />
        </SocialLink>
      </LinkContainer>
    </Container>
  );
};

export default Navbar;
