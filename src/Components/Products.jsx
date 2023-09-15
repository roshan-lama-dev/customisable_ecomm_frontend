import { styled } from "styled-components";
import { popularProducts } from "../data";
import { Product } from "./Product";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import axios from "axios";
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
export const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(filteredProducts);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          cat
            ? `http://localhost:5000/v1/products?category=${cat}`
            : "http://localhost:5000/v1/products"
        );
        const { status, message } = data;
        setProducts(message);
        console.log(status, message);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <>
      <Container>
        <Title>Our Best Products</Title>
        <Hr />
      </Container>
      <Container>
        {cat
          ? filteredProducts.map((item, i) => <Product key={i} item={item} />)
          : products
              .slice(0, 8)
              .map((item, i) => <Product key={i} item={item} />)}
      </Container>
    </>
  );
};
