import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  flex: 9;
  padding: 20px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UpdateTitle = styled.span`
  font-size: 30px;
  margin-bottom: 20px;
  color: lightcoral;
`;
const DeleteTitle = styled.span`
  color: red;
  font-size: 12px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label``;

const ProfilePictureSettings = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px 0;
`;
const ProfilePicture = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
// const ProfilePictureSettingsIcon = styled.i`
//   width: 25px;
//   height: 25px;
//   border-radius: 50%;
//   background-color: lightcoral;
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   margin-left: 10px;
// `;

const FileInputLabel = styled.label``;
const FileInput = styled.input`
  font-size: 20px;
  margin-top: 20px;
`;

const TextInput = styled.input`
  color: gray;
  margin: 10px 0;
  height: 30px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

const SubmitButton = styled.button`
  border: none;
  width: 150px;
  align-self: center;
  border-radius: 10px;
  color: white;
  background-color: teal;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
`;

const Settings = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <UpdateTitle>Update your account.</UpdateTitle>
          <DeleteTitle>Delete account.</DeleteTitle>
        </Title>
        <Form>
          <Label>Profile Picture</Label>
          <ProfilePictureSettings>
            <FileInputLabel htmlFor="fileInput">
              <ProfilePicture
                alt=""
                src="https://images.unsplash.com/photo-1634500242645-151910ed2a4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
              />
            </FileInputLabel>
            <FileInput type="file" id="fileInput" style={{ display: "none" }} />
          </ProfilePictureSettings>
          <Label>Username</Label>
          <TextInput type="text" placeholder="JohnBlogger" />
          <Label>Email</Label>
          <TextInput type="email" placeholder="Johnblogger@mail.com" />
          <Label>Password</Label>
          <TextInput type="password" />
          <SubmitButton>UPDATE</SubmitButton>
        </Form>
      </Wrapper>
      <Sidebar />
    </Container>
  );
};

export default Settings;
