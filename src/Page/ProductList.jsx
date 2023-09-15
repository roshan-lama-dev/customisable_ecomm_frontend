import { styled } from "styled-components";
import { Navbar } from "../Components/Navbar";
import { Products } from "../Components/Products";
import { Announcement } from "../Components/Announcement";
import { NewsLetter } from "../Components/NewsLetter";
import { Footer } from "../Components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-weight: 600;
  font-size: 20px;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
`;
const Option = styled.option``;
export const ProductList = () => {
  // get the category which has been sent as a parameter from the static category as Link while choosing the specific category
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handelOnChange = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <Title>Dress</Title>
        {/* <Container>ProductList</Container> */}
        <FilterContainer>
          <Filter>
            {" "}
            <FilterText> Filter Products:</FilterText>{" "}
            <Select name="color" onChange={handelOnChange}>
              <Option>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Yellow</Option>
            </Select>
            <Select name="size" onChange={handelOnChange}>
              <Option>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            {" "}
            <FilterText> Sort By:</FilterText>{" "}
            <Select name="sort" onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Container>
      <Products cat={cat} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </>
  );
};
