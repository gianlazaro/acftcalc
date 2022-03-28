import styled from "styled-components";
import { Info, Mail } from "react-feather";

function Nav() {
  return (
    <Wrapper>
      <ul>
        <li id="logo">
          <a href="#">ACFTCALC.COM 🏋️</a>
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
  color: orange;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul #logo a {
    color: white;
    text-decoration: none;
    font-weight: 800;
  }

  ul > div {
    display: flex;
  }

  ul > div li {
    padding: 15px;
  }
`;

export default Nav;
