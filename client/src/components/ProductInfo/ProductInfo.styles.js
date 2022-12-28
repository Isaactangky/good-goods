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

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
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

// export const Carousel = styled.div`
//   border-radius: 10px;
//   overflow: hidden;

//   .image-container {
//     border-radius: 10px;
//     overflow: hidden;
//     background-color: var(--medgrey);
//     height: 250px;
//     padding: auto 0;
//   }
//   img {
//     max-height: 250px;
//     max-width: 100%;
//     object-fit: cover;
//     margin: auto;
//   }
// `;
