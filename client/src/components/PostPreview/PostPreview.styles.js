import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  max-width: 40rem;

  @media screen and (max-width: 800px) {
    max-width: 25rem;
  }
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
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export const Info = styled.div`
  height: 175px;

  padding: 10px 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  ${"" /* justify-content: space-between; */}
  @media screen and (max-width: 800px) {
    height: 150px;
    width: 100%;
  }
  h4 {
    text-transform: capitalize;
  }
  .description {
    font-size: var(--fontS);
  }
  .category {
    font-size: var(--fontXS);
    opacity: 0.8;
    margin-top: auto;
  }
`;

export const ImageContainer = styled.div`
  width: 225px;
  height: 175px;

  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: 200px;
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 225px;
  height: 175px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: var(--radius);
  animation: animateThumb 0.5s;
  @media screen and (max-width: 800px) {
    height: 200px;

    width: 100%;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
