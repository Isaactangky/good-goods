import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 50px 20px 0;
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin: 30px auto;
`;

export const Content = styled.div`
  width: 400px;
  padding: 20px;
  background: var(--lightgrey);
  border-radius: var(--radius);
  box-shadow: var(--dark-shadow);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  button {
    font-size: var(--fontM);
    padding: 5px 15px;
  }
`;

export const Footer = styled.footer`
  ${"" /* text-align: center; */}
  padding: 20px 5px;
  font-size: var(--fontS);
  display: flex;
  justify-content: center;
  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    color: blue;
    margin-left: 5px;
    ${"" /* letter-spacing: 1px; */}
    font-weight: 500;
    font-size: var(--fontS);

    text-transform: capitalize;
  }
`;
