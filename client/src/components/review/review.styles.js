import styled from "styled-components";

export const ReviewContainer = styled.div`
  margin: 5px 0rem;

  padding: 10px;
  display: flex;
  flex-direction: column;
`;
export const InfoContainer = styled.div`
  display: flex;
  align-itmes: center;
  jusitify-content: center;
  gap: 2rem;
`;

export const Username = styled.span`
  font-weight: 700;
  opacity: 1;
  display: block;
`;
export const Date = styled.span`
  opacity: 0.6;
  display: block;
`;
export const Rating = styled.p`
  margin: 1px 0px;
  span {
  }
`;

export const Content = styled.p`
  margin: 5px 0px;
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
  opacity: 0.6;
`;
