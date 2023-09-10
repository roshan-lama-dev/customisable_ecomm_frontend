import { styled } from "styled-components";
import { popularProducts } from "../data";
import { Product } from "./Product";
const Container = styled.div`
  padding: 20px;
  gap: 10px;
  display: flex;

  /* gap: 10px;
  flex-wrap: wrap; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  margin-top: 20px;
  text-transform: uppercase;
`;
export const Products = () => {
  return (
    <>
      <Container>
        <Title>Our Best Products</Title>
      </Container>
      <Container>
        {popularProducts.map((item, i) => (
          <Product key={i} item={item} />
        ))}
      </Container>
    </>
  );
};
