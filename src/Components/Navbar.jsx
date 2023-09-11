import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { mobile } from "../responsive";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px; */
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;

  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 5px" })}
`;

const Left = styled.div`
  display: flex;
  gap: 25px;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "60px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
  ${mobile({ justifyContent: "center" })}
  ${mobile({ gap: "10px" })}
  ${mobile({ flex: "2" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ fontSize: "12px" })}
`;

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>

          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 25 }}></SearchIcon>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Ecomm</Logo>
        </Center>
        <Right>
          <MenuItem>
            <NavLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/register"
            >
              REGISTER
            </NavLink>
          </MenuItem>
          <MenuItem>
            {" "}
            <NavLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/login"
            >
              LOGIN
            </NavLink>
          </MenuItem>
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
