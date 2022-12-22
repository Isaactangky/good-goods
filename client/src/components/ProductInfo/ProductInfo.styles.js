import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--max-width);
  padding: 0 20px 20px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid var(--lightgrey);
  span {
    font-size: var(--fontXS);
    color: orangered;
  }
  p {
    margin-top: 1rem;
  }
`;
export const Text = styled.div`
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  h1 {
    text-transform: capitalize;
  }
`;

export const Carousel = styled.div`
  border-radius: 10px;
  overflow: hidden;
  .image-container {
    background-color: var(--medgrey);
  }
  img {
    height: 300px;
    object-fit: cover;
    margin: 0 auto;
  }
`;
