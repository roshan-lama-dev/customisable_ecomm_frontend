import { styled } from "styled-components";
import SendIcon from "@mui/icons-material/Send";
const HeightContainer = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  /* gap: 10px; */
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  /* width: 100%; */
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.div`
  font-weight: 500;
  font-size: 24px;
`;
const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 2px solid lightgray;
`;
const Input = styled.input`
  border: none;
  outline: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  border: none;
  height: 100%;
  flex: 1;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export const NewsLetter = () => {
  return (
    <HeightContainer>
      <Container>
        <Title>Newsletter</Title>
        <Description>Get timely Updates on new product arrivals.</Description>
        <InputContainer>
          <Input placeholder="Your email address" />

          <Button>
            <SendIcon />
          </Button>
        </InputContainer>
      </Container>
    </HeightContainer>
  );
};
