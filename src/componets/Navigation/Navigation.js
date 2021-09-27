import { StyledNavLink } from "./Navigation.styled";

export function Navigation() {
  return (
    <nav>
      <StyledNavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Home
      </StyledNavLink>
      <StyledNavLink
        to="/movies"
        activeStyle={{
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Movies
      </StyledNavLink>
    </nav>
  );
}
