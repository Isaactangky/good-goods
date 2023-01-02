import styled from "styled-components";

export const Container = styled.div`
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
`;

export const Footer = styled.footer`
  ${"" /* text-align: center; */}
  padding: 20px 5px;
  font-size: var(--fontS);
  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    color: blue;
    margin-left: 5px;
    letter-spacing: 1px;
    font-weight: 500;
    font-size: var(--fontS);

    text-transform: capitalize;
  }
`;
