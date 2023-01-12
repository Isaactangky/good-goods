import styled from "styled-components";
import Button from "../Button/Button.component";
import FormTextarea from "../FormTextarea/FormTextarea.component";

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

  border-top: 2px solid var(--lightgrey);
  border-bottom: 2px solid var(--lightgrey);
  padding: 20px;
`;

export const ReviewFormTextarea = styled(FormTextarea)`
  font-size: var(--fontS);
  border: none;
  margin: 0;
  padding: 0px;
  padding-left: 5px;
  gap: 0;

  :focus {
    border: none;
  }
`;
