import styled from "styled-components";
export const Title = styled.h2`
  margin-top: 1rem;
  padding: 10px 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;
export const Content = styled.div`
  width: 100%;
  border: 2px solid var(--lightgrey);
  padding: 20px 100px 50px;
  border-radius: var(--radius);
  @media screen and (max-width: 800px) {
    padding: 20px 20px 50px;
  }
`;

export const ReviewsContainer = styled.div`
  margin-top: 20px;
`;
