import { styled } from "styled-components";
import { popularProducts } from "../data";
import { Product } from "./Product";
import { mobile } from "../responsive";
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
const Title = styled.h1`
  margin-top: 20px;
  text-transform: uppercase;
  /* ${mobile({ fontSize: "25px" })} */
`;
export const Products = () => {
  return (
    <>
      <Container>
        <Title>Our Best Products</Title>
        <Hr />
      </Container>
      <Container>
        {popularProducts.map((item, i) => (
          <Product key={i} item={item} />
        ))}
      </Container>
    </>
  );
};
