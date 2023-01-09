import styled from "styled-components";
import FormTextarea from "../FormTextarea/FormTextarea.component";
export const Textarea = styled(FormTextarea)``;
export const FileInputGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: var(--margin-form-ele);
  .file_input {
    color: var(--medgrey);

    font-size: var(--fontS);
    position: absolute;
    left: 30px;
    z-index: -1;
  }

  .file_label {
    font-size: var(--fontS);
    color: var(--darkgrey);
    background: var(--white);
    border: 1px solid #ccc;
    display: inline-block;
    padding: 5px;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  width: 500px;
  padding: 20px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    width: 90vw;
  }
`;
