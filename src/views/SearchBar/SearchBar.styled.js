import styled from "@emotion/styled";

export const Button = styled.button`
  display: inline-block;
  font-size: 18px;
  font: inherit;
  padding: 2.5px;
  cursor: pointer;
  outline: none;
  color: inherit;
  background-color: rgba(33, 83, 128, 0.3);
  border-color: rgba(33, 83, 128, 0.3);
  border-radius: 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.01);
  }
`;
export const Input = styled.input`
  font: inherit;
  font-size: 20px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  margin-right: 5px;
  color: inherit;
  border-color: rgba(33, 83, 128, 0.3);
  border-radius: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
    color: inherit;
  }
`;
