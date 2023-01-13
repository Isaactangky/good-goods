import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--margin-form-ele);
`;

export const Select = styled.select`
  padding: 5px;
  font-size: var(--fontS);
  color: var(--medgrey);
  border: 1px solid var(--lightgrey);
  background-color: none;
  border-radius: var(--radius);
`;

export const Label = styled.label`
  padding: 10px 10px 10px 5px;
  font-size: var(--fontS);
  color: var(--darkgrey);
`;
