import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { theme } from "../constants";
import { accent } from "../utils";
import Logo from "../logo2";

const Nav = styled.nav``;

const StyledNav = styled(Link)`
  box-sizing: border-box;
  color: ${({ color }) => theme.colors[color]};
  display: block;
  font-size: 30px;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${({ color }) => accent(theme.colors[color])};
  }
`;

const External = styled.a`
  box-sizing: border-box;
  color: #c34715;
  display: block;
  font-size: 30px;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${accent("#c34715")};
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 1em;
  svg {
    width: 200px;
  }
`;

const NavLink = props => (
  <StyledNav
    {...props}
    getProps={({ isCurrent }) => {
      // theme.colors[props.color]
      return {
        style: isCurrent
          ? {
              color: accent(theme.colors[props.color]),
              // textDecoration: 'underline',
              // transform: 'scale(1.05) skew(0deg)',
              fontWeight: 900
            }
          : null
      };
    }}
  />
);

const Section = styled.section`
  background-color: black;
  border-right: 1px solid #21504c;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  line-height: 30px;
  padding: 20px;
  position: fixed;
  justify-content: space-between;
`;

export default class NavBar extends React.Component {
  render() {
    return (
      <Section>
        <Nav>
          <NavLink to="/about" color="yellow">
            About
          </NavLink>
          <NavLink to="/sights" color="turquoise">
            Sights
          </NavLink>
          <NavLink to="/equipment" color="blue">
            Equipment
          </NavLink>
          <NavLink to="/artists" color="lightblue">
            Artists
          </NavLink>
          <External
            href="https://infiniteohm.bandcamp.com"
            target="blank"
            color="red"
          >
            Ohm Records
          </External>
        </Nav>
        <Link to="/">
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </Link>
      </Section>
    );
  }
}
