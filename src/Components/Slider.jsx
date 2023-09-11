import { styled } from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";

import { sliderItems } from "../data.js";
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 20vh);

  /* height: 100vh; */

  display: flex;
  position: relative;
  overflow: hidden;

  margin-bottom: 20px;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #d5d2d2;
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
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 2s ease;
  transform: translateX(${(props) => props.slideindex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  height: 100vh;
  width: 100vw;
  padding: 20px;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 90%;
  width: 90%;
  object-fit: cover;
  /* border: 12px; */
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  border: 2px solid gray;

  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

export const Slider = () => {
  const [slideindex, setslideindex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setslideindex(slideindex > 0 ? slideindex - 1 : 2);
    } else {
      setslideindex(slideindex < 2 ? slideindex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideindex={slideindex}>
        {sliderItems.map((item, key) => (
          <Slide key={key}>
            <ImageContainer>
              <Image src={item.img} alt="" />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow rightarrow="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};
