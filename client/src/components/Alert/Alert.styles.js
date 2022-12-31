import styled from "styled-components";

export const Wrapper = styled.div`
  margin: auto;
  margin-top: 20px;
  max-width: 350px;
  width: 100%;
  position: fixed;
  right: 0;
  z-index: 100;
  transition: var(--transition);
  transform: translateX(100%);

  &.alert-active {
    transform: translateX(0%);
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 1.25rem 0;

  height: 1.25rem;
  border-radius: 0.25rem;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--light-shadow);

  p {
    letter-spacing: var(--spacing);
    font-size: var(--fontS);
    text-align: center;
    text-transform: capitalize;
  }
  &.alert-danger {
    background: #f8d7da;

    p {
      color: #721c24;
    }
  }
  &.alert-success {
    background: #d4edda;
    p {
      color: #155724;
    }
  }
`;
