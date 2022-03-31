import { Link } from "react-router-dom";
import styled from "styled-components";

function CallToActionButton() {
  return (
    <Wrapper>
      <Link to="/" className="CABbutton">
        Ready to calculate your score on the ACFT? Click here!
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.span`
  & .CABbutton {
    display: block;
    text-decoration: none;
    width: 100%;
    background-color: var(--primary-color);
    color: #fff;
    border-radius: 100px;
    padding: 25px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
    font-weight: 800;

    @media (min-width: 1024px) {
      width: 50%;
      margin: 50px auto;
    }
  }
`;

export default CallToActionButton;
