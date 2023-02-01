import styled from "styled-components";

export const ReviewContainer = styled.div`
  border: 1px solid var(--lightgrey);
  border-left: 2px solid var(--medgrey);
  border-right: 2px solid var(--medgrey);

  border-radius: 10px;
  margin: 10px 0rem;
  font-size: 14px;
  padding: 10px 10px 10px 20px;
  display: flex;
  flex-direction: column;
`;
// export const InfoContainer = styled.div`
//   display: flex;
//   align-itmes: center;
//   jusitify-content: center;
//   gap: 2rem;
// `;

export const Username = styled.span`
  font-weight: 600;
  opacity: 1;
  display: block;
`;
export const ReviewTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: cneter;

  opacity: 0.6;
  span {
    margin-left: 5px;
  }
`;
export const Rating = styled.div`
  display: flex;
  align-items: cneter;
  ${"" /* margin-top: 5px; */}
`;

export const Content = styled.p`
  font-size: var(--fontS);
  margin: 5px 0px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-itmes: center;
  justify-content: flex-start;
  font-size: 0.8rem;
  opacity: 1;
`;

export const FunctionalityButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.6;
`;
