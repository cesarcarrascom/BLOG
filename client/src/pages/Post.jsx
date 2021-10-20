import SinglePost from "../components/SinglePost";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Post = () => {
  return (
    <Container>
      <SinglePost />
      <Sidebar />
    </Container>
  );
};

export default Post;
