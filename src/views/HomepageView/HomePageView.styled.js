import styled from "@emotion/styled";

export const MovieList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
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
export const MovieItem = styled.li`
  border-radius: 2px;
  box-shadow: ${(props) => props.theme.boxShadow.item};
  transition: ${(props) =>
    `transform ${props.theme.transaction.time},${props.theme.transaction.timeFunction} `};
  background-color: #fff;
  border-radius: 5px;
  &:hover {
    transform: scale(1.03);
  }
`;
export const MovieImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
export const Title = styled.p`
  margin-top: 4px;
  margin-bottom: 4px;
`;
export const HomepageTitle = styled.h2`
  margin-top: 0;
  text-shadow: ${(props) => props.theme.boxShadow.text};
`;
