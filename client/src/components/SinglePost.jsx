import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  flex: 9;
`;
const Wrapper = styled.div`
  padding: 20px;
  padding-right: 0;
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
`;
const PostTitle = styled.h1`
  text-align: center;
  margin: 10px;
  font-family: "Lora", sans-serif;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ActionsContainer = styled.div`
  float: right;
  font-size: 16px;
`;
const Icon = styled.i`
  margin-left: 10px;
  cursor: pointer;
  color: ${(props) => props.edit && "teal"};
  color: ${(props) => props.delete && "tomato"};
`;
const PostInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #be9656;
  font-family: "Varela", sans-serif;
`;
const PostAuthor = styled.span``;
const PostDate = styled.span``;
const PostText = styled.p`
  color: #666;
  font-size: 18px;
  line-height: 25px;

  &:first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
  }
`;

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  return (
    <Container>
      <Wrapper>
        <Image
          src="https://images.unsplash.com/photo-1634133118553-1e6e18299886?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <PostTitle>
          Lorem ipsum dolor sit amet.
          <ActionsContainer>
            <Icon className="far fa-edit" edit></Icon>
            <Icon className="far fa-trash-alt" delete></Icon>
          </ActionsContainer>
        </PostTitle>
        <PostInfo>
          <PostAuthor>John Blogger</PostAuthor>
          <PostDate>1 hour ago</PostDate>
        </PostInfo>
        <PostText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem,
          assumenda, voluptatum labore autem in placeat perspiciatis quasi
          deserunt dolorem consectetur quis ipsam? Dignissimos qui distinctio
          consequuntur ipsam ea quam alias.
        </PostText>
      </Wrapper>
    </Container>
  );
};

export default SinglePost;
