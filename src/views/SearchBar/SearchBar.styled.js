import styled from "@emotion/styled";

export const Button = styled.button`
  display: inline-flex;
  font-size: 18px;
  font: inherit;
  padding: 4px;
  cursor: pointer;
  color: inherit;
  background-color: transparent;
  border: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.01);
  }
`;

export const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid rgb(33, 83, 128);
  outline: 0;
  font-size: 18px;
  color: inherit;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: inherit;
  }
`;
export const InputWrapper = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
