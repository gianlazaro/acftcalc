import React, { Suspense } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BlogWidget = React.lazy(() => import("./BlogWidget"));

function App() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Wrapper>
      <Nav />
      <Outlet />
      <BottomSection>
        <Suspense fallback={<div>Loading...</div>}>
          <div></div>
          <BlogWidget />
        </Suspense>
      </BottomSection>
      <Footer>
        <a href="https://www.gianlazaro.com">Made by gianlazaro.com</a>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: #ccc;
  max-width: 1024px;
  margin: 0 auto;
`;

const Footer = styled.footer`
  a {
    color: #444;
    font-size: 0.75rem;
  }
  text-align: center;
  height: 50px;
  margin: 25px 0;
`;

const BottomSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  & div {
    flex: 1 0 300px;
  }
`;

export default App;
