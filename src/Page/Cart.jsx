import { styled } from "styled-components";
import { Navbar } from "../Components/Navbar";
import { Announcement } from "../Components/Announcement";
import { Footer } from "../Components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../responsive";
const Container = styled.div`
  /* width: 100vw; */
`;
const Wrapper = styled.div`
  padding: 20px;
  /* overflow: hidden; */
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 300;
  ${mobile({ fontSize: "25px" })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  /* width: 100vw; */
  justify-content: space-evenly;

  padding: 20px;
  ${mobile({ padding: "0px", justifyContent: "space-evenly" })}
`;

const TopButton = styled.button`
  padding: 10px;
  ${mobile({ padding: "5px", fontWeight: "500", fontSize: "12px" })}

  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  display: flex;
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 20px;
  ${mobile({ fontSize: "14px" })}
`;
const Bottom = styled.div`
  justify-content: space-between;
  display: flex;
  ${mobile({ flexDirection: "column" })}
  margin-top: 15px;
`;

const Info = styled.div`
  flex: 2;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 10px; */
  padding: 5px;
`;
const ProductDetail = styled.div`
  flex: 3;
  gap: 10px;
  display: flex;
`;
const Image = styled.img`
  height: 200px;
  width: 200px;

  ${mobile({ height: "100px", width: "100px" })}
`;
const Details = styled.div`
  /* gap: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  gap: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ fontSize: "20px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
  ${mobile({ fontSize: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 30vh;
  margin-top: ;
  ${mobile({ fontSize: "20px", height: "30vh" })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  text-transform: uppercase;
  ${mobile({ fontSize: "25px" })}
`;
const SummaryItem = styled.div`
  display: flex;
  margin: 30px 0px;
  ${mobile({ margin: "20px 0px" })}

  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SumaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  color: white;
  background-color: black;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  ${mobile({ padding: "5px", fontWeight: "100" })}
`;
export const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>

          <TopTexts>
            <TopText>Shopping bag(3)</TopText>
            <TopText>Your Whislist</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" />

                <Details>
                  <ProductName>
                    <b>Product Name: </b>Test Product
                  </ProductName>
                  <ProductId>
                    <b>Product ID:</b> 132312
                  </ProductId>
                  <ProductColor color="black" />

                  <ProductSize>
                    <b>Size:</b> XL
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />

                  <ProductAmount>$20</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" />

                <Details>
                  <ProductName>
                    <b>Product Name: </b>Test Product
                  </ProductName>
                  <ProductId>
                    <b>Product ID:</b> 132312
                  </ProductId>
                  <ProductColor color="black" />

                  <ProductSize>
                    <b>Size:</b> XL
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />

                  <ProductAmount>$20</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SumaryItemText>SubTotal</SumaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SumaryItemText>Estimated Shipping</SumaryItemText>
              <SummaryItemPrice>$5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SumaryItemText>Shipping Discout</SumaryItemText>
              <SummaryItemPrice>$-5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SumaryItemText>Total</SumaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECK OUT</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};