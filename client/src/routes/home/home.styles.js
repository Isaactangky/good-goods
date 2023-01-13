import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 90vh;
  text-align: center;
  color: white;
  background: ${({ background }) => `url(${background})`};
  background-position: center;
  background-size: cover;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  padding: 100px 100px 80px;

  width: 100%;
  height: 100%;
  min-height: 90vh;

  background: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--white);
  h1 {
    color: var(--white);
    color: var(--clr-primary-5);

    opacity: 1;
    text-shadow: var(--dark-shadow-2);
  }
  p {
    font-size: var(--fontM);
    color: var(--clr-primary-10);
    opacity: 1;
    text-shadow: var(--dark-shadow);
    margin: 2rem 0;
  }
  @media screen and (max-width: 800px) {
    padding: 100px 50px 80px;

    h1 {
      ${"" /* font-size: var(--fontXS); */}
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
