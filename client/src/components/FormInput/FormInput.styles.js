// $sub-color: grey;
// $main-color: black;

// @mixin shrinkLabel {
//   top: -14px;
//   font-size: var(--fontS);
//   color: $main-color;
// }
import styled from "styled-components";

export const Group = styled.div`
  width: 100%;
  margin-bottom: var(--margin-form-ele);
  display: flex;
  flex-direction: column;
  gap: 5px;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
export const Input = styled.input`
  background-color: white;
  color: var(--medgrey);
  font-size: var(--fontM);
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: 1px solid var(--medgrey);
  border-radius: var(--radius);

  :focus {
    background-color: white;
  }
`;

export const InputLabel = styled.label`
  color: var(--darkgrey);
  font-size: var(--fontS);
  font-weight: normal;
  text-transform: capitalize;
  padding: 5px;
  pointer-events: none;
`;
// .group {
//   width: 100%;
//   position: relative;
//   margin: var(--margin-form-ele);

//   .form-input {
//     background: none;
//     background-color: white;
//     color: var(--medgrey);
//     font-size: var(--fontM);
//     padding: 10px 10px 10px 5px;
//     display: block;
//     width: 100%;
//     border: none;
//     border-radius: 0;
//     border-bottom: 1px solid $sub-color;

//     &:focus {
//       outline: none;
//     }

//     &:focus ~ .form-input-label {
//       @include shrinkLabel();
//     }
//   }

//   input[type="password"] {
//     letter-spacing: 0.3em;
//   }

//   .form-input-label {
//     color: var(--medgrey);
//     font-size: var(--fontM);
//     font-weight: normal;
//     text-transform: capitalize;
//     position: absolute;
//     pointer-events: none;
//     left: 5px;
//     top: 10px;
//     transition: 300ms ease all;

//     &.shrink {
//       @include shrinkLabel();
//     }
//   }
// }
