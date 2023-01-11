import styled from "styled-components";

export const Wrapper = styled.div`
  margin: auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 500px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  background: var(--lightgrey);
  border-radius: var(--radius);
  box-shadow: var(--dark-shadow);
  ${
    "" /* input[type="text"],
  textarea,
  select,
  input[type="file"] {
    background: var(--clr-primary-9);
  } */
  }
  @media screen and (max-width: 500px) {
    width: 90vw;
    min-width: 350px;
  }
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  padding: 1rem;
`;
