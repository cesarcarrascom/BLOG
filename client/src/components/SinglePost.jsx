import styled from "styled-components";

const Container = styled.div`
  flex: 9;
`;
const Wrapper = styled.div``;
const Image = styled.div``;
const PostTitle = styled.h1``;
const ActionsContainer = styled.div``;
const Icon = styled.i``;

const SinglePost = () => {
  return (
    <Container>
      <Wrapper>
        <Image
          src="https://images.unsplash.com/photo-1634133118553-1e6e18299886?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <PostTitle>Lorem ipsum dolor sit amet.</PostTitle>
        <ActionsContainer>
          <Icon className="far fa-edit"></Icon>
          <Icon className="far fa-trash-alt"></Icon>
        </ActionsContainer>
      </Wrapper>
    </Container>
  );
};

export default SinglePost;
