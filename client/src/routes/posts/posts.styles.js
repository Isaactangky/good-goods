import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 50px 0;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
`;
export const Title = styled.div`
 @media screen and (max-width: 1200px) {
    display: flex:
    justify-content: center;
    align-items: center;
    h3{
      text-align: center;
    }
    
  }
`;
export const PostsContainer = styled.div`
  width: 100%;
  padding-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  h3 {
    color: var(--darkgrey);
  }
`;
export const OtherInfoContainer = styled.div`
  padding: 0 20px;
`;
