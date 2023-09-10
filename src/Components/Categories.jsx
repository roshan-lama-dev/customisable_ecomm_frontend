import { styled } from "styled-components";
import { categories } from "../data";
import { CategoryItem } from "./CategoryItem";

const Container = styled.div`
  /* height: 100vh; */
  padding: 20px;
  display: flex;
  /* flex-direction: column; */

  gap: 20px;
`;

const Title = styled.h1`
  text-transform: uppercase;
  margin-top: 50px;
`;

export const Categories = () => {
  return (
    <>
      <Container>
        <Title>Browse Our Categories</Title>
      </Container>
      <Container>
        {categories.map((item, i) => (
          <CategoryItem key={i} item={item} />
        ))}
      </Container>
    </>
  );
};
