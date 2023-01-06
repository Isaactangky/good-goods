import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 100px 100px 80px;
  min-height: 90vh;
  text-align: center;
  color: white;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--white);
  h1 {
    color: var(--white);
  }
  p {
    font-size: var(--fontM);
    color: var(--white);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
