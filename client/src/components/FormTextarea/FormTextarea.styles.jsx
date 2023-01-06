import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: var(--margin-form-ele);
`;

export const Label = styled.label`
  font-size: var(--fontS);
  text-transform: capitalize;
  padding: 5px;
`;
export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  border: 1px solid var(--medgrey);
  overflow: auto;
  font-size: var(--fontM);
  color: var(--medgrey);
  outline: none;
  padding: 10px 10px 10px 5px;
  :focus {
    outline: none;
    border: 1px solid var(--medgrey);
  }
`;
