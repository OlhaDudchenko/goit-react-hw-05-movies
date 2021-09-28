import { StyledNavLink } from "./Navigation.styled";

export function Navigation() {
  return (
    <nav>
      <StyledNavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "rgb(250, 179, 12)",
        }}
      >
        Home
      </StyledNavLink>
      <StyledNavLink
        to="/movies"
        activeStyle={{
          fontWeight: "bold",
          color: "rgb(242, 175, 19)",
        }}
      >
        Movies
      </StyledNavLink>
    </nav>
  );
}
