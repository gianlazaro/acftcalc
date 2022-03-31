import styled from "styled-components";
import { useParams } from "react-router-dom";
import { BlogPosts } from "./BlogPosts";
import CallToActionButton from "./CallToActionButton";
import { Helmet } from "react-helmet-async";

function BlogPost() {
  let { postId } = useParams();

  let paragraphs = BlogPosts[postId].content.map((p) => {
    let randomNum = Math.floor(Math.random() * 1000) + 1;

    return <p key={randomNum}>{p}</p>;
  });
  return (
    <Wrapper>
      <Helmet>
        <title>{BlogPosts[postId].title} - ACFTCalc.com</title>
        <meta name="title" content={BlogPosts[postId].title} />
        <meta name="description" content={BlogPosts[postId].content[0]} />
      </Helmet>
      <HeadlineImage
        src={BlogPosts[postId].imageUrl}
        alt={BlogPosts[postId].altText}
      />
      <h1>{BlogPosts[postId].title}</h1>
      <h5>{BlogPosts[postId].author}</h5>
      {paragraphs}
      <CallToActionButton />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  font-size: 18px;
  & h1 {
    color: var(--text-color);
  }
  & h5 {
    color: var(--secondary-color);
  }
  & p {
    color: var(--text-color);
    line-height: 1.75em;
  }
  & iframe {
    border-radius: 10px;
  }
`;

const HeadlineImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: center top;
  border-radius: 10px;

  @media (min-width: 1024px) {
    height: 700px;
  }
`;

export default BlogPost;
