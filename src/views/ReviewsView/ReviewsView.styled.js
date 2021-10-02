import styled from "@emotion/styled";

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;
export const Text = styled.span`
  font-weight: 500;
  font-size: 17px;
`;
export const Author = styled.p`
  color: ${(props) => props.theme.colors.accent};
`;
