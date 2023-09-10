import { styled } from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const Info = styled.div`
  opacity: 0;
  display: flex;
  /* gap: 2px; */
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
  height: 350px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfb;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  height: 75%;
  /* width: 100%; */
  object-fit: cover;
  z-index: 2;
  /* width: 100%; */
`;
const Cricle = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Icon = styled.div`
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
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
      <Cricle>
        <Info>
          <Icon>
            <FavoriteBorderOutlinedIcon />
          </Icon>
          <Icon>
            <SearchOutlinedIcon />
          </Icon>
          <Icon>
            <ShoppingCartOutlinedIcon />
          </Icon>
        </Info>
      </Cricle>
    </Container>
  );
};
