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
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  button {
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    padding: 0.375rem 0.25rem;
    color: var(--clr-primary-4);
    cursor: pointer;
    transition: var(--transition);
    :hover {
      border-bottom: 2px solid var(--clr-primary-8);
    }
    &.category-active {
      ${"" /* background: var(--clr-primary-4); */}
      border-bottom: 2px solid  var(--clr-primary-5)
      ${"" /* color: var(--white); */}
    }
  }
  @media screen and (max-width: 1200px) {
    button {
      font-size: var(--fontM);
      padding: 0.3rem 0.2rem;
    }
  }
  @media screen and (max-width: 800px) {
    button {
      font-size: var(--fontS);
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
