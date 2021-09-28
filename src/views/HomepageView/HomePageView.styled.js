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
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3);
`;
