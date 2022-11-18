import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 0rem;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const UserName = styled.p`
  font-weight: bold;
  ${"" /* display: inline-block; */}
`;
export const Rating = styled.p`
  font-size: 0.8rem;

  span {
  }
`;
export const Date = styled.p`
  display: inline-block;
  font-size: 0.8rem;
`;

export const Content = styled.p`
  grid-area: "content";
`;
