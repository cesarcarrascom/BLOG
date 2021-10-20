import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";

const Container = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Posts />
        <Sidebar />
      </Container>
    </>
  );
};

export default Home;
