import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Container = styled.div`
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px; */
`;

const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  gap: 25px;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>

          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: 25 }}></SearchIcon>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Ecomm</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
