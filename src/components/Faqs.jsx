import styled from "styled-components";

function Faqs() {
  let isMobile = window.matchMedia(
    "only screen and (max-width: 550px)"
  ).matches;
  return (
    <Wrapper>
      <h2 style={{ borderBottom: "1px solid #333", paddingBottom: "1rem" }}>
        FAQs
      </h2>
      <details open={!isMobile}>
        <summary>My score falls in between two steps?</summary>
        <p>Your score will be the lower of the two steps.</p>
      </details>
      <details open={!isMobile}>
        <summary>Why are the scale steps random?</summary>
        <p>
          It is not random. Every step in the scale is based on the 11-page PDF
          the Army posted on 23 March 2022 linked{" "}
          <a href="https://www.army.mil/e2/downloads/rv7/acft/ACFT_scoring_scales_220323.pdf">
            here
          </a>
          .
        </p>
      </details>
      <details open={!isMobile}>
        <summary>Is there a light mode?</summary>
        <p>
          At the moment, it is the least of my priorities. Most ACFT tests are
          conducted in the early mornings.
        </p>
      </details>
      <details open={!isMobile}>
        <summary>Where is feature XYZ?</summary>
        <p>
          Shoot me an email at hello@gianlazaro.com and I'll give it look! Keep
          up to date with changes on{" "}
          <a href="https://github.com/gianlazaro/acftcalc">Github</a>!
        </p>
      </details>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #111;
  border-radius: 10px;
  padding: 25px;

  & details {
    padding: 10px;
    color: #ccc;
  }

  & summary {
    color: var(--secondary-color);
  }
`;

export default Faqs;
