import { styled } from "styled-components";
import { categories } from "../data";
import { CategoryItem } from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  /* height: 100vh; */
  padding: 20px;
  display: flex;
  ${mobile({ flexDirection: "column" })}

  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: #fdf4f4;
`;

const Title = styled.h1`
  text-transform: uppercase;
  margin-top: 40px;
  text-align: center;
  ${mobile({ fontSize: "25px", marginTop: "25px" })}
`;
const Hr = styled.hr`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5px;
  width: 50px;
  color: black;
  background: teal;
  border: none;
  display: none;
  ${mobile({ display: "block" })}
`;

export const Categories = () => {
  return (
    <>
      <Container>
        <Title>Browse Our Categories</Title>
        <Hr />
      </Container>
      <Container>
        {categories.map((item, i) => (
          <CategoryItem key={i} item={item} />
        ))}
      </Container>
    </>
  );
};
