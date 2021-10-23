import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
`;

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");

      setPosts(res.data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Posts posts={posts} />
        <Sidebar />
      </Container>
    </>
  );
};

export default Home;
