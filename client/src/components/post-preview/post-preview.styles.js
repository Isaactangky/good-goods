import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: var(--light-shadow);
  :hover {
    ${
      "" /* background-image: linear-gradient(
      to bottom right,
      white,
      white,
      rgb(254, 229, 221)
    ); */
    }
    box-shadow: var(--dark-shadow);
  }
`;
export const Content = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Info = styled.div`
  height: 100px;
  padding: 10px 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    text-transform: capitalize;
  }
  .description {
    font-size: var(--fontS);
    justify-self: start;
  }
  .category {
    font-size: var(--fontXS);
    opacity: 0.8;
  }
`;

export const ImageContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  height: 100px;
  width: 100px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 10px;
  animation: animateThumb 0.5s;

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
