import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 385px;
  margin: 0px 25px 40px 25px;
`;
const PostImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 7px;
`;
const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PostCategories = styled.div``;
const PostCategory = styled.span`
  font-family: "Varela", sans-serif;
  font-size: 11px;
  color: #be9656;
  line-height: 20px;
  margin-top: 15px;
  margin-right: 10px;
  cursor: pointer;
`;
const PostTitle = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-top: 15px;
  cursor: pointer;
`;
const PostDate = styled.span`
  font-family: "Lora", sans-serif;
  font-style: italic;
  font-size: 13px;
  color: #999;
  margin-top: 15px;
`;

const PostDescription = styled.span`
  font-family: "Varela", sans-serif;

  font-size: 14px;
  color: #444;
  line-height: 24px;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
const Post = ({ post }) => {
  return (
    <Container>
      {post.image && <PostImage src={post.image} alt="" />}

      <PostInfo>
        <PostCategories>
          {post.categories.map((c) => (
            <PostCategory>{c}</PostCategory>
          ))}
        </PostCategories>
        <Link className="link" to={`posts/${post._id}`}>
          <PostTitle>{post.title}</PostTitle>
        </Link>

        <hr />
        <PostDate> {new Date(post.createdAt).toDateString()}</PostDate>
      </PostInfo>
      <PostDescription>{post.body}</PostDescription>
    </Container>
  );
};

export default Post;
