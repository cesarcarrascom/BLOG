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
const Post = () => {
  return (
    <Container>
      <PostImage
        src="https://images.unsplash.com/photo-1634582870449-90577753e6e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <PostInfo>
        <PostCategories>
          <PostCategory>Music</PostCategory>
          <PostCategory>Life</PostCategory>
          <PostCategory>Tech</PostCategory>
        </PostCategories>
        <PostTitle>Lorem ipsum dolor sit amet</PostTitle>
        <hr />
        <PostDate> 1h ago</PostDate>
      </PostInfo>
      <PostDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus
        eligendi, praesentium voluptatibus porro quibusdam, tenetur eaque nam
        quo odio, corporis facere atque beatae doloribus deleniti alias autem
        asperiores ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Suscipit minus eligendi, praesentium voluptatibus porro quibusdam,
        tenetur eaque nam quo odio, corporis facere atque beatae doloribus
        deleniti alias autem asperiores ad.
      </PostDescription>
    </Container>
  );
};

export default Post;
