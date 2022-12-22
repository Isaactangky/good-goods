import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 50px 0;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 20rem;
`;
export const PostsContainer = styled.div`
  min-height: 100vh;
  padding: 0 20px;
  // border: 1px solid black;
  display: flex;
  flex-direction: column;

  gap: 1rem;
  h3 {
    color: var(--darkgrey);
  }
`;
export const OtherInfoContainer = styled.div`
  min-height: 100vh;
  padding: 0 20px;
`;
