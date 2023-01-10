import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 40px;
  width: 100%;
  margin-bottom: var(--margin-form-ele);
  background: inherit;
`;
export const Input = styled.input`
  color: var(--darkgrey);
  font-size: var(--fontS);
  position: absolute;
  left: 30px;
  z-index: 1;
`;

export const InputLabel = styled.label`
  font-size: var(--fontS);
  color: var(--darkgrey);
  background: var(--white);
  border: 1px solid var(--lightgrey);
  border-radius: var(--radius);
  position: absolute;
  left: 0px;
  z-index: 5;
  padding: 5px;
  cursor: pointer;
  :hover {
    transform: scale(1.01);
  }
`;
