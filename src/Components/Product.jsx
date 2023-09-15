import { styled } from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
const Info = styled.div`
  opacity: 0;
  display: flex;
  gap: 10px;
  position: absolute;
  background: #00000061;
  top: 0;
  height: 100%;
  width: 100%;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 3;
  transition: all 0.5s ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  /* max-width: 280px; */
  height: 350px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfb;
  ${mobile({ height: "250px" })}

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  height: 85%;
  width: 85%;
  object-fit: cover;
  z-index: 2;
  /* width: 100%; */
`;
// const Cricle = styled.div`
//   min-width: 280px;
//   height: 350px;
//   padding: 50px;
//   top: 0;
//   left: 0;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;

const Icon = styled.div`
  height: 50px;
  width: 50px;
  ${mobile({ height: "35px", width: "35px" })} /* gap: 10px; */

  background-color: white;
  border-radius: 50%;
  display: flex;
  /* gap: 10px; */
  justify-content: center;
  align-items: center;
  /* transition: tra; */
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    cursor: pointer;
    transform: scale(1.1);
  }
`;
export const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlinedIcon />
          </Link>
        </Icon>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};
