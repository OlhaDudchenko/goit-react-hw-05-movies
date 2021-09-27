import styled from "@emotion/styled";

export const Button = styled.button`
  display: inline-block;
  font-size: 18px;
  font: inherit;
  padding: 2.5px;
  cursor: pointer;
  outline: none;
`;
export const Input = styled.input`
  font: inherit;
  font-size: 20px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  margin-right: 5px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
