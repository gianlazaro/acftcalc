import styled from "styled-components";
import { Info, Mail } from "react-feather";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Wrapper>
      <ul>
        <li id="logo">
          <Link to="/">ACFTCALC.COM 🏋️</Link>
          <span>(updated 23MAR22)</span>
        </li>
        <div>
          <li>
            <a href="mailto: hello@gianlazaro.com">
              <Mail size={24} color="white" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/_gianlazaro">
              <Info size={24} color="white" />
            </a>
          </li>
        </div>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0px;
    padding-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul #logo a {
    color: white;
    text-decoration: none;
    font-weight: 800;
  }

  #logo span {
    display: block;
    font-size: 0.75rem;
    color: #bbb;
  }
  ul > div {
    display: flex;
  }

  ul > div li {
    padding: 15px;
  }
`;

export default Nav;
