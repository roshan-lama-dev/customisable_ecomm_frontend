import { styled } from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.rightarrow === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100;
`;
const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.image``;
const InfoContainer = styled.div`
  flex: 1;
`;
export const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image src="https://images.unsplash.com/photo-1628015081036-0747ec8f077a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" />
          </ImageContainer>
          <InfoContainer></InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow rightarrow="right">
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};
