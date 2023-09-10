import { styled } from "styled-components";

const Container = styled.div`
  flex: 1;

  height: 50vh;
  position: relative;
  /* border-radius: 20px; */
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;

  height: 5%;
  width: 100%;

  top: calc(100% - 30%);
  left: 0;
  /* margin: auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  /* background: white; */
`;
const Title = styled.h1`
  color: black;
  text-transform: uppercase;
`;
const Button = styled.button`
  border: none;
  padding: 10px 20px;
  /* background: gray; */
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
export const CategoryItem = ({ item }) => {
  //   console.log(item.title);
  return (
    <>
      <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Container>
    </>
  );
};
