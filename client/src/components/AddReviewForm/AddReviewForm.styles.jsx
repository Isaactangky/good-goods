import styled from "styled-components";
import Button from "../Button/Button.component";

// TODO import Button
export const AddReviewButton = styled(Button)``;

export const Container = styled.div`
  display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
  justify-content: space-between;
  transition: var(--transition);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  border-top: 2px solid var(--lightgrey);
  border-bottom: 2px solid var(--lightgrey);
  padding: 10px 0;
`;
