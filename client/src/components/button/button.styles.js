import styled from "styled-components";
import { Spinner } from "../Spinner/Spinner.styles";
export const BaseButton = styled.button`
  letter-spacing: 0.5px;
  line-height: 2rem;
  padding: 0 0.5rem;
  font-size: 0.85rem;
  background-color: var(--clr-primary-5);
  transition: var(--transition);

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
    background-color: var(--clr-primary-6);
    color: white;
  }
`;

export const ButtonSpinner = styled(Spinner)`
  height: 1rem;
  width: 1rem;
  margin: 0.5rem 1rem;
  border: 2px solid var(--clr-primary-8);
  border-top: 2px solid var(--clr-primary-2);
`;

/*
$orange-red-light: rgb(244, 92, 37);

.base {
  padding: 1rem;
  width: auto;
  letter-spacing: 0.5px;
  line-height: 2rem;
  padding: 0 20px 0 20px;
  font-size: 1rem;
  background-color: orangered;
  color: white;
  font-family: "Popins";
  font-weight: bolder;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: $orange-red-light;
  }
  &.outline {
    background-color: white;
    border: 1px $orange-red-light solid;
    color: $orange-red-light;

    &:hover {
      background-color: $orange-red-light;
      color: white;
      // border: none;
    }
  }

  // &.inverted {
  //   background-color: white;
  //   color: black;
  //   border: 1px solid black;

  //   &:hover {
  //     background-color: black;
  //     color: white;
  //     border: none;
  //   }
  // }
}
*/
