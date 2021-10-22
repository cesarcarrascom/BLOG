import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;

  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Josefin Sans", sans-serif;
  background-color: white;
  z-index: 999;
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftIcon = styled.i`
  font-size: 20px;
  margin-right: 10px;
  color: #444;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 6;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li`
  margin-right: 20px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
const RightIcon = styled.i`
  font-size: 18px;
  color: #666;
  cursor: pointer;
  margin-left: 15px;
`;
const Navbar = () => {
  const user = true;
  return (
    <NavbarContainer>
      <Left>
        <LeftIcon className="fab fa-twitter-square"></LeftIcon>
        <LeftIcon className="fab fa-linkedin"></LeftIcon>
        <LeftIcon className="fab fa-instagram-square"></LeftIcon>
      </Left>
      <Center>
        <List>
          <ListItem>
            <Link className="link" to="/">
              HOME
            </Link>
          </ListItem>

          <ListItem>
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </ListItem>
          <ListItem>
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </ListItem>
          {user && (
            <>
              <ListItem>
                <Link className="link" to="/write">
                  WRITE
                </Link>
              </ListItem>
              <ListItem>
                <Link className="link" to="/logout">
                  LOGOUT
                </Link>
              </ListItem>
            </>
          )}
        </List>
      </Center>
      <Right>
        {user ? (
          <ProfileImage
            src="https://images.unsplash.com/photo-1634622484002-617ab0c40444?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=790&q=80"
            alt=""
          ></ProfileImage>
        ) : (
          <List>
            <ListItem>
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </ListItem>
            <ListItem>
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </ListItem>
          </List>
        )}

        <RightIcon className="fas fa-search"></RightIcon>
      </Right>
    </NavbarContainer>
  );
};

export default Navbar;
