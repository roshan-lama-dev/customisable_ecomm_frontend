import { styled } from "styled-components";
import { Navbar } from "../Components/Navbar";
import { Products } from "../Components/Products";
import { Announcement } from "../Components/Announcement";
import { NewsLetter } from "../Components/NewsLetter";
import { Footer } from "../Components/Footer";

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
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Yellow</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
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
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Container>
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};
