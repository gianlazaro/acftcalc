import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { Link, Outlet } from "react-router-dom";
import { BlogPosts } from "./BlogPosts";
import { useLocation, useParams } from "react-router-dom";
function App() {
  let { postId } = useParams();
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let blogTitles = BlogPosts.map((post, i) => {
    let listItem;
    if (Number(postId) !== i) {
      let articleUrl = `/blog/${i}`;
      listItem = (
        <li key={i}>
          <Link to={articleUrl}>{post.title}</Link>
        </li>
      );
    }
    return listItem;
  });
  return (
    <Wrapper>
      <Nav />
      <Outlet />
      <BottomSection>
        <div></div>
        <BlogWidget>
          <h2 style={{ borderBottom: "1px solid #333", paddingBottom: "1rem" }}>
            Blog Posts
          </h2>
          <ul>{blogTitles}</ul>
        </BlogWidget>
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

const BlogWidget = styled.div`
  background-color: #111;
  border-radius: 10px;
  padding: 25px;
  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-bottom: 10px;
  }

  ul li {
    padding: 10px 0;
  }
`;
export default App;
