import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 90vh;
  padding: 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--medgrey);
  color: white;
  label {
    color: white;
  }
`;
export const Content = styled.div`
  max-width: var(--max-width);
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
export const Title = styled.h2`
  text-align: center;
  padding: 1rem;
`;
export const ContactInfo = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
  span {
    font-size: var(fontM);
    color: var(--medgrey);
    font-weight: bold;
    color: white;
  }
`;
