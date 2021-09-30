import { StyledNavLink } from "./Navigation.styled";

export function Navigation() {
  return (
    <nav style={{ paddingBottom: "20px" }}>
      <StyledNavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "rgb(252, 151, 0)",
        }}
      >
        Home
      </StyledNavLink>
      <StyledNavLink
        to="/movies"
        activeStyle={{
          fontWeight: "bold",
          color: "rgb(252, 151, 0)",
        }}
      >
        Movies
      </StyledNavLink>
    </nav>
  );
}
