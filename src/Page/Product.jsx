import { styled } from "styled-components";
import { Navbar } from "../Components/Navbar";
import { Announcement } from "../Components/Announcement";
import { NewsLetter } from "../Components/NewsLetter";
import { Footer } from "../Components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { publicRequest } from "../helper/AxiosHelper";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  gap: 50px;
  ${mobile({ display: "block" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* padding: 0px 50px; */
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  ${mobile({ height: "40vh" })}

  object-fit: cover;
`;

// const Container = styled.div``;
const Title = styled.h1`
  font-weight: 200;
`;

const ProductDesc = styled.p`
  /* margin: 20px 0px; */
`;

const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
  ${mobile({ fontSize: "30px" })}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  gap: 30px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  /* gap: 10px;  */
`;
const FilterTitle = styled.span`
  font-weight: 200;
  font-size: 20px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 3px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
  /* width: 50%; */
  gap: 100px;
`;
const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
  gap: 5px;
  align-items: center;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  padding: 15px 10px;
  width: 200px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  ${mobile({ padding: "10px" })}

  &:hover {
  }
`;
const FilterSizeOption = styled.option``;
export const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  // product state to store the api call array
  const [product, setProduct] = useState({});
  // quantity state
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  console.log(color, size);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await publicRequest.get("/products/find/" + id);
        const { status, message } = data;
        setProduct(message);
        console.log(message);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "inc") {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity);
    }
  };

  const handleClick = () => {
    // update cart
  };
  return (
    <Container>
      <Announcement />
      <Navbar />

      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product?.title}</Title>
          <ProductDesc>{product?.desc}</ProductDesc>
          <Price>${product?.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>

              {product?.color?.map((c, i) => (
                <FilterColor key={i} color={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product?.size?.map((c, i) => (
                  <FilterSizeOption value={c} key={i}>
                    {c}
                  </FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <RemoveIcon
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("dec")}
              />
              <Amount>{quantity}</Amount>
              <AddIcon
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("inc")}
              />
            </AmountContainer>
          </AddContainer>
          <Button onClick={handleClick}>Add to Cart</Button>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};
