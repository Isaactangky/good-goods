import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  background-color: var(--lightgrey);
  padding: 20px 20px 50px;
  border-radius: var(--radius);
  box-shadow: var(--dark-shadow);
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
