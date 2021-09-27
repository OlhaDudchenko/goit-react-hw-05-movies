import styled from "@emotion/styled";

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 40px);
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
`;
