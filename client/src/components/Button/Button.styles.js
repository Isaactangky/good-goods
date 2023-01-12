import styled from "styled-components";
import { Spinner } from "../Spinner/Spinner.styles";
export const BaseButton = styled.button`
  letter-spacing: 0.5px;
  line-height: 2rem;
  padding: 0 0.8rem;
  font-size: 0.85rem;
  background-color: var(--clr-primary-5);
  transition: var(--transition);
  width: max-content;

  color: white;
  font-weight: bold;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  display: flex;
  justify-content: center;

  :hover {
    background-color: var(--clr-primary-7);
  }
`;

export const OutlineButton = styled(BaseButton)`
  background-color: white;
  border: 1px var(--clr-primary-6) solid;
  color: var(--clr-primary-6);

  :hover {
    background-color: var(--clr-primary-5);
    border: 1px var(--clr-primary-5) solid;
    color: var(--clr-primary-10);
  }
`;

export const ButtonSpinner = styled(Spinner)`
  height: 1rem;
  width: 1rem;
  margin: 0.5rem 1rem;
  border: 2px solid var(--clr-primary-8);
  border-top: 2px solid var(--clr-primary-2);
`;
