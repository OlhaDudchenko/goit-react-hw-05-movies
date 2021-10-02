import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 17px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};
`;

export const CastList = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
  margin: 0;
  margin-top: 4px;
  display: flex;
`;

export const MovieTitle = styled.h2`
  margin: 0;
  color: ${(props) => props.theme.colors.accent};
`;
export const Score = styled.p`
  margin: 0;
  margin-top: 8px;
`;
export const ScoreText = styled.span`
  color: ${(props) => props.theme.colors.dark};
  font-weight: 600;
`;
export const Overview = styled.p`
  margin: 0;
  margin-top: 8px;
`;
export const Text = styled.p`
  margin: 0;
  margin-top: 4px;
  font-size: 17px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};
`;
export const Genres = styled.p`
  margin: 0;
  margin-top: 8px;
`;
export const Info = styled.p`
  margin: 0;
  margin-top: 8px;
`;
export const MovieInfo = styled.div`
  display: inline-flex;
  text-align: left;
  margin-top: 20px;
  background-color: ${(props) => props.theme.colors.milkAccent};
  padding: 50px 40px;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.boxShadow.item};
`;
export const Wrapper = styled.div`
  text-align: left;
`;
export const Button = styled.button`
  display: block;
  font-size: 18px;
  font: inherit;
  padding: 2.5px;
  cursor: pointer;
  color: inherit;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.main};
  transition: ${(props) =>
      `transform ${props.theme.transaction.time},${props.theme.transaction.timeFunction}`}
    250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.01);
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 5px;
  padding: 2px;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.main};
  transition: ${(props) =>
      `transform ${props.theme.transaction.time},${props.theme.transaction.timeFunction}`}
    250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.accent};
    transform: scale(1.01);
  }
`;
