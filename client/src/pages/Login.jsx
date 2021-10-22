import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1631976666755-b0581e5bc2e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80");
  background-size: cover;
  //   opacity: 0.5;
`;

const Title = styled.span`
  font-size: 50px;
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Label = styled.label`
  margin: 10px 0;
`;
const TextInput = styled.input`
  padding: 10px;
  background-color: white;
  border: none;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  cursor: pointer;
  background-color: lightcoral;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px;
`;
const RegisterButton = styled.button`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: teal;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Title>Login</Title>

      <Form>
        <Label>Email</Label>
        <TextInput type="text" placeholder="Enter your email..." />
        <Label>Password</Label>
        <TextInput type="password" placeholder="Password..." />
        <SubmitButton>Login</SubmitButton>
      </Form>
      <RegisterButton>
        <Link to="/register" className="link">
          Register
        </Link>
      </RegisterButton>
    </Container>
  );
};

export default Login;
