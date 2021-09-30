import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 17px;
  font-weight: 600;
  color: rgb(39, 49, 64);
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
  color: rgb(252, 151, 0);
`;
export const Score = styled.p`
  margin: 0;
  margin-top: 8px;
`;
export const ScoreText = styled.span`
  color: rgb(39, 49, 64);
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
  color: rgb(39, 49, 64);
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
  background-color: rgba(255, 255, 255, 0.6);
  padding: 50px 40px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
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
  color: rgb(33, 83, 128);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.01);
  }
`;
