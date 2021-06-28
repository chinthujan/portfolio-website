import styled from "styled-components";
import { NavHashLink } from "react-router-hash-link";
import useWindowSize from "../hooks/useWindowSize";

// const Scroll = (id) => {
//   const anchor = document.querySelector(`#${id}`);
//   anchor.scrollIntoView({ behavior: "smooth", block: "center" });
// };

export default function NavBar() {
  const size = useWindowSize();

  const scrollWithOffset = (el, offset) => {
    window.scroll({
      top: el.offsetTop - offset,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <NavContainer>
      <StyledHeader>
        <LeftLogo>
          C<GreenText>J</GreenText>
        </LeftLogo>
        {size.width > 765 ? (
          <>
            <NavLink
              activeClassName="activeStyle"
              to="/#about-me"
              spy={true}
              smooth={true}
              scroll={(el) => scrollWithOffset(el, 75)}
              exact
            >
              About Me
            </NavLink>
            <NavLink
              activeClassName="activeStyle"
              to="/#skills"
              spy={true}
              smooth={true}
              scroll={(el) => scrollWithOffset(el, 75)}
              exact
            >
              Skills
            </NavLink>
            <NavLink
              activeClassName="activeStyle"
              to="/#work"
              spy={true}
              smooth={true}
              scroll={(el) => scrollWithOffset(el, 75)}
              exact
            >
              Works
            </NavLink>
            <NavLink
              activeClassName="activeStyle"
              to="/#goals"
              spy={true}
              smooth={true}
              scroll={(el) => scrollWithOffset(el, 75)}
              exact
            >
              Goals
            </NavLink>
            <NavLink
              activeClassName="activeStyle"
              to="/#contact"
              spy={true}
              smooth={true}
              scroll={(el) => scrollWithOffset(el, 75)}
              exact
            >
              Contact
            </NavLink>
          </>
        ) : null}
      </StyledHeader>
    </NavContainer>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 80%;
  font-family: "Gilroy";
`;

const LeftLogo = styled.div`
  margin-right: auto;
  font-weight: 900;
  font-size: 48px;
  color: #ffffff;
  cursor: pointer;
  vertical-align: middle;
`;

const NavContainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
`;

const GreenText = styled.span`
  color: #6bc8b5;
`;

const NavLink = styled(NavHashLink)`
  text-decoration: none; /* no underline */
  margin-left: 24px;
  padding-bottom: 8px;
  color: #656773;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  vertical-align: middle;
  &.${(props) => props.activeClassName} {
    color: #fff;
    border-bottom: 4px solid #6bc8b5;
  }
`;
