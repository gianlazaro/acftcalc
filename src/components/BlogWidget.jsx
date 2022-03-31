import { BlogPosts } from "./BlogPosts";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

function BlogWidget() {
  let { postId } = useParams();
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
      <h2 style={{ borderBottom: "1px solid #333", paddingBottom: "1rem" }}>
        Blog Posts
      </h2>
      <ul>{blogTitles}</ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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

export default BlogWidget;
