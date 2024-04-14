import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../ghost-api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Modal } from "@mui/material";
import { FreeMode, Pagination } from "swiper/modules";
import DOMPurify from "dompurify";
import "../App.css";

// Styled components for Swiper and slides
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
  position: relative;
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
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  opacity: 1;
  filter: brightness(50%) blur(1px);
  border-radius: 30px;
  @media (max-width: 768px) {
    border-radius: 10px;
  }
`;

const SlideTitle = styled.div`
  font-size: 35px;
  font-weight: 300;
  position: absolute;
  z-index: 10;
  color: white;
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

const StyledModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${() => (window.innerWidth < 600 ? '80vw' : '600px')};
  max-height: 80vh;
  background-color: #cbd1d7;
  border: none;
  padding: 16px; // Assuming 4 units of theme spacing is 16px
  overflow-y: auto;
  border-radius: 10px;
`;

const GhostPostContent = styled.div`
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const Projects = () => {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    api.posts
      .browse({ limit: 5, include: "tags,authors" })
      .then((posts) => setPosts(posts))
      .catch((err) => console.error(err));
  }, []);

  const handleOpen = (post) => {
    setCurrentPost(post);
    setOpen(true);
  };

  const handleClose = () => {
    setCurrentPost(null);
    setOpen(false);
  };

  return (
    <Container id="projects">
      <Title>Projects</Title>
      <StyledSwiper
        slidesPerView={window.innerWidth < 600 ? 1 : 2}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
      >
        {posts.map((post) => (
          <StyledSwiperSlide key={post.id} onClick={() => handleOpen(post)}>
            <SlideImage $image={post.feature_image} />
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
        <StyledModalBox>
          {currentPost && (
            <div>
              <ProjectTitle>{currentPost.title}</ProjectTitle>
              <GhostPostContent dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(currentPost.html) }} />
            </div>
          )}
        </StyledModalBox>
      </Modal>
    </Container>
  );
};

export default Projects;
