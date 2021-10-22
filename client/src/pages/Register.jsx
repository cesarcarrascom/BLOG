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
    url("https://images.unsplash.com/photo-1634585248909-c80e77988e4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1175&q=80");
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
  background-color: teal;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px;
`;
const LoginButton = styled.button`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: lightcoral;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Title>Register</Title>

      <Form>
        <Label>Username</Label>
        <TextInput type="text" placeholder="Username..." />
        <Label>Email</Label>
        <TextInput type="email" placeholder="example@mail.com" />
        <Label>Password</Label>
        <TextInput type="password" placeholder="Password..." />
        <SubmitButton>Register</SubmitButton>
      </Form>
      <LoginButton>
        <Link className="link" to="/login">
          Login
        </Link>
      </LoginButton>
    </Container>
  );
};

export default Register;
