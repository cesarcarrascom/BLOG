import styled from "styled-components";

const Container = styled.div`
  padding-top: 50px;
`;

const Image = styled.img`
  margin-left: 150px;
  width: 70vw;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
`;
const Form = styled.form`
  position: relative;
`;
const FormGroup = styled.div`
  margin-left: 150px;
  display: flex;
  align-items: center;
`;
const FileInputLabel = styled.label``;
const AddFileIcon = styled.i`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: lightgray;
  cursor: pointer;
`;
const FileInput = styled.input`
  display: none;
`;
const TitleInput = styled.input`
  font-size: 30px;
  border: none;
  padding: 20px;
  width: 70vw;
  &:focus {
    outline: none;
  }
`;
const TextArea = styled.textarea`
  font-size: 20px;
  height: 100vh;
  border: none;
  padding: 20px;
  width: 70vw;
  &:focus {
    outline: none;
  }
`;
const SubmitButton = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  color: white;
  background-color: teal;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
`;
const Write = () => {
  return (
    <Container>
      <Image
        src="https://images.unsplash.com/photo-1611608822787-dac49cb561a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        alt=""
      />
      <Form>
        <FormGroup>
          <FileInputLabel htmlFor="fileInput">
            <AddFileIcon className="fas fa-plus" />
          </FileInputLabel>
          <FileInput type="file" id="fileInput" />
          <TitleInput type="text" placeholder="Title..." autoFocus={true} />
        </FormGroup>
        <FormGroup>
          <TextArea placeholder="Tell your story..." type="text"></TextArea>
        </FormGroup>
        <SubmitButton>Publish</SubmitButton>
      </Form>
    </Container>
  );
};

export default Write;
