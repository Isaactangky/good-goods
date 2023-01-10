import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 100px 100px 80px;
  min-height: 90vh;
  text-align: center;
  color: white;
  background: ${({ background }) => `url(${background})`};
  background-position: center;
  background-size: cover;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--white);
  h1 {
    color: var(--white);
    box-shadow: var(--light-shadow);
    opacity: 1;
  }
  p {
    font-size: var(--fontM);
    color: var(--white);
    box-shadow: var(--light-shadow);
    opacity: 1;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
