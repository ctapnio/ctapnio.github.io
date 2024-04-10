import styled from "styled-components";

import { DotLoader } from "react-spinners";

const LoaderOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #cbd1d7;
  z-index: 999;
`;

const LoaderContainer = styled.div`
  padding: 20px;
  background: transparent;
  border-radius: 5px;
  box-shadow: none;
`;

const Loader = () => {
  return (
    <LoaderOverlay>
      <LoaderContainer>
        <DotLoader color="#2f2d2d" loading={true} size={150} />
      </LoaderContainer>
    </LoaderOverlay>
  );
};

export default Loader;
