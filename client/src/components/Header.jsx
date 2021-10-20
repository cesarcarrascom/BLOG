import styled from "styled-components";

const Container = styled.div`
  margin-top: 60px;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lora", sans-serif;
  color: #444;
  position: relative;
`;

const TitleItemSm = styled.span`
  position: absolute;
  top: 18%;
  font-size: 20px;
`;
const TitleItemLg = styled.span`
  position: absolute;
  top: 20%;
  font-size: 100px;
`;
const Image = styled.img`
  width: 100%;
  height: 450px;
  margin-top: 80px;
  object-fit: cover;
`;

const Header = () => {
  return (
    <Container>
      <Titles>
        <TitleItemSm>React & Node</TitleItemSm>
        <TitleItemLg>Blog</TitleItemLg>
      </Titles>
      <Image
        src="https://images.unsplash.com/photo-1626539233615-3aab72e67b46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        alt=""
      ></Image>
    </Container>
  );
};

export default Header;
