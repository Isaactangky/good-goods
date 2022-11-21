import styled from "styled-components";

export const ReviewContainer = styled.div`
  margin: 1rem 0rem;
  opacity: 0.8;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const InfoContainer = styled.div`
  display: flex;
  align-itmes: center;

  gap: 2rem;
`;

export const UserName = styled.div`
  font-weight: bold;
  opacity: 1;

  ${"" /* display: inline-block; */}
`;
export const Rating = styled.p`
  span {
  }
`;
export const Date = styled.div`
  font-size: 0.8rem;
`;

export const Content = styled.p`
  grid-area: "content";
`;

export const FunctionalityContainer = styled.div`
  display: flex;
  align-itmes: center;
  jusitify-content: flex-start;
  font-size: 0.8rem;
  opacity: 1;
`;

export const FunctionalityButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
