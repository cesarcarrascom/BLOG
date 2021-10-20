import styled from "styled-components";

const Container = styled.div`
  flex: 3;
  margin: 20px;
  padding-bottom: 30px;
  background-cololr: #fdfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.span`
  margin: 10px;
  padding: 5px;
  width: 80%;
  border-top: 1px solid #a7a4a4;
  border-bottom: 1px solid #a7a4a4;
  font-family: "Varela", sans-serif;
  font-size: 12px;
  color: #222;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
`;
const Image = styled.img`
  margin-top: 15px;
  height: 50%;
  width: 50%;
  object-fit: cover;
`;

const Text = styled.p`
  padding: 30px;
`;

const Categories = styled.ul`
  list-style: none;
  margin-bottom: 30px;
`;
const Category = styled.li`
  display: inline-block;
  width: 50%;
  margin-top: 15px;
  cursor: pointer;
`;

const Social = styled.div`
  margin-top: 15px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SocialIcon = styled.i`
  font-size: 16px;
  margin-left: 10px;
`;

const Sidebar = () => {
  return (
    <Container>
      <Item>
        <Title>ABOUT ME</Title>
        <Image
          src="https://images.unsplash.com/photo-1634412085609-a06c2c9f8eb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
          expedita recusandae nam culpa!
        </Text>
      </Item>
      <Item>
        <Title>CATEGORIES</Title>
        <Categories>
          <Category>Life</Category>
          <Category>Music</Category>
          <Category>Style</Category>
          <Category>Sport</Category>
          <Category>Tech</Category>
        </Categories>
      </Item>
      <Item>
        <Title>FOLLOW US</Title>
        <Social>
          <SocialIcon className="fab fa-twitter-square"></SocialIcon>
          <SocialIcon className="fab fa-linkedin"></SocialIcon>
          <SocialIcon className="fab fa-instagram-square"></SocialIcon>
        </Social>
      </Item>
    </Container>
  );
};

export default Sidebar;
