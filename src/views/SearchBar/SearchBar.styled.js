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
  transition: ${(props) =>
    `transform ${props.theme.transaction.time},${props.theme.transaction.time}`};

  &:hover {
    transform: scale(1.01);
  }
`;

export const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.main}`};
  outline: 0;
  font-size: 18px;
  color: inherit;
  padding: 7px 0;
  background-color: transparent;

  &::placeholder {
    color: inherit;
  }
`;
export const InputWrapper = styled.div`
  position: relative;
  padding: 15px 0;
  margin-top: 10px;
  width: 50%;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
