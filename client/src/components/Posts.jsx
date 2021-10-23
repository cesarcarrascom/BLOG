import styled from "styled-components";
import Post from "../components/Post";

const Container = styled.div`
  flex: 9;
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
`;

const Posts = ({ posts }) => {
  return (
    <Container>
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </Container>
  );
};

export default Posts;
