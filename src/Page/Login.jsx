import { styled } from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1948&q=80")
    center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  ${mobile({ width: "90%" })} /* gap: 10px; */

  width: 20%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: 20px;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Input = styled.input`
  /* min-width: ; */
  width: auto;
  padding: 10px;
  outline: none;
  font-size: 18px;
`;

const Button = styled.button`
  width: auto;
  border: none;
  padding: 10px 20px;

  background-color: ${(props) => props.color};
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  text-transform: uppercase;
`;

const Link = styled.a`
  cursor: pointer;
  ${mobile({ fontSize: "15px", fontWeight: "500" })}/* gap: 10px; */
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-decoration: underline;
`;

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          {/*         
          <Agreement>By creating an Account</Agreement> */}
          <LinkContainer>
            <Link>FORGOT PASSWORD?</Link>
            <Link>CREATE AN ACCOUNT</Link>
          </LinkContainer>
        </Form>
        <Button color="teal">Login</Button>
        <Button color="black">
          {" "}
          <GoogleIcon /> Sign-in With Google
        </Button>

        {/* <Button>Login</Button> */}
      </Wrapper>
    </Container>
  );
};
