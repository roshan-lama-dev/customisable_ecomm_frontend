import { styled } from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
const Container = styled.div`
  padding: 20px;
  display: flex;
  /* height: 50vh; */
  align-items: center;
  justify-content: center;
  /* align-items: flex-start; */
`;
const Left = styled.div`
  flex: 1;
  /* gap: 10px; */
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  /* padding: 20px; */
`;

const Logo = styled.h1`
  text-align: left;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  /* width: 10px; */
  display: flex;
  gap: 20px;
`;
const SocailIcon = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  background-color: #${(props) => props.color};
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3``;
const List = styled.ul`
  margin: 30px 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  /* margin:20px */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  /* gap: 10px; */
`;
const ContactItem = styled.div`
  margin: 20px;
  display: flex;
  /* padding: ga; */
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Ecomm.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit
          quos optio. Voluptatibus enim magni quae totam eius, doloremque eum
          quia quam cumque aperiam labore accusantium similique beatae sit
          iusto..
        </Desc>
        <SocialContainer>
          <SocailIcon color="3B5999">
            <FacebookIcon />
          </SocailIcon>
          <SocailIcon color="E1306C">
            <InstagramIcon />
          </SocailIcon>
          <SocailIcon color="1D9BF0">
            <TwitterIcon />
          </SocailIcon>
          <SocailIcon color="0077b5">
            <LinkedInIcon />
          </SocailIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Track Order</ListItem>
          <ListItem>Whislist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <AddLocationAltIcon /> 36 Street, South Side, 25666
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon />
          +68 985 111 4545
        </ContactItem>
        <ContactItem>
          <EmailIcon /> contact@ecomm.com
        </ContactItem>
      </Right>
    </Container>
  );
};
