import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../ghost-api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FreeMode, Pagination } from "swiper/modules";

const StyledSwiper = styled(Swiper)`
  width: 50%;
  height: 50%;
  padding: 5%;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; // Needed for absolute positioning of children
  border-radius: 30px;
  box-shadow: 5px 5px 8px black;
  @media (max-width: 768px) {
    border-radius: 10px;
  }
`;

const SlideImage = styled.div`
cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  opacity: 1; // Make image like a watermark
  filter: brightness(50%)  blur(1px);
  border-radius: 30px;
  
  @media (max-width: 768px) {
    border-radius: 10px 10px 8px black;
  }
`;

const SlideTitle = styled.div`
  font-size: 35px;
  font-weight: 300;
  position: absolute;
  z-index: 10; // Above the watermark image
  color: white; // Assuming a dark watermark for visibility
`;

const Container = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Title = styled.h1`
  color: #fff;
`;
const ProjectTitle = styled.h1`
  color: black !important;
`;
const GhostPostContent = styled.div`
  color: #333 !important; // Replace with your actual styles
  font-size: 16px !important; // Replace with your actual styles
  line-height: 1.6 !important; // Replace with your actual styles
  overflow-y: scroll; // If you want to add scrolling
  max-height: 500px; // Set a max-height for scrolling
  // Add other styles as needed
`;

const getModalStyle = () => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: window.innerWidth < 600 ? "80vw" : "600px", // Use 100% width for screens smaller than 600px
  maxHeight: "80vh",
  bgcolor: "#cbd1d7",
  border: "none",
  p: 4,
  overflowY: "auto",
  borderRadius: "10px",
});



const Projects = () => {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [modalStyle, setModalStyle] = useState(getModalStyle());
  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth < 600 ? 1 : 2
  );

  const GhostPostContent = styled.div`
  color: #333 !important; // Existing styles
  font-size: 16px !important;
  line-height: 1.6 !important;
  overflow-y: scroll;
  max-height: 500px;
  
  // Target images within the content
  img {
    max-width: 100%; // Ensure images are not wider than the container
    height: auto; // Maintain aspect ratio
    display: block; // Remove potential extra space below images
  }

  // Add other styles as needed
`;
  const handleOpen = (post) => {
    setCurrentPost(post);
    setOpen(true);
  };

  const handleClose = () => {
    setCurrentPost(null);
    setOpen(false);
  };

  useEffect(() => {
    api.posts
      .browse({ limit: 5, include: "tags,authors" })
      .then((posts) => setPosts(posts))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setModalStyle(getModalStyle());
      setSlidesPerView(window.innerWidth < 600 ? 1 : 2);
    };

    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures effect is only run on mount and unmount
 
  
  return (
    <Container id="projects">
      <Title>Projects</Title>
      <StyledSwiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
      >
        {posts.map((post) => (
          <StyledSwiperSlide key={post.id} onClick={() => handleOpen(post)}>
            <SlideImage image={post.feature_image} />
            <SlideTitle>{post.title}</SlideTitle>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          {currentPost && (
            <div>
              <ProjectTitle>{currentPost.title}</ProjectTitle>
              <GhostPostContent
                dangerouslySetInnerHTML={{ __html: currentPost.html }}
              />
            </div>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default Projects;
