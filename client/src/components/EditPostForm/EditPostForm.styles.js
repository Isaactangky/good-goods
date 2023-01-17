import styled from "styled-components";

export const ImagesContainer = styled.div`
  height: 200px;
  width: 100%;
  padding: 10px;

  background: white;
  overflow: scroll;
  border: 1px solid var(--lightgrey);
  border-radius: var(--radius);
  margin-bottom: var(--margin-form-ele);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid var(--lightgrey);
  border-radius: var(--radius);

  img {
    object-fit: cover;
  }
  input {
    margin-right: 10px;
  }
`;
