// import { styled } from "styled-components";

// const Container = styled.div`
//   height: 100vh;
//   width: 100vw;
//   background: url("https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")
//     center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
// const Wrapper = styled.div`
//   /* height: 100%; */
//   width: 40%;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 20px;
//   background: linear-gradient(
//     rgba(255, 255, 255, 0.5),
//     rgba(255, 255, 255, 0.5)
//   );
// `;
// const Title = styled.h1`
//   text-transform: uppercase;
//   font-size: 24px;
// `;
// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;
// const Input = styled.input`
//   min-width: 40%;
//   padding: 10px;
//   outline: none;
// `;
// const Agreement = styled.span`
//   font-size: 12px;
// `;

// const Button = styled.button`
//   width: 50%;
//   border: none;
//   padding: 10px 20px;

//   background-color: teal;
//   cursor: pointer;
//   color: white;
//   font-size: 14px;
//   font-weight: 500;
// `;

// export const Register = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Title>Create an Account</Title>
//         <Form>
//           <Input placeholder="First Name" />
//           <Input placeholder="Last Name" />
//           <Input placeholder="Username" />
//           <Input placeholder="Email" />
//           <Input placeholder="Password" />
//           <Input placeholder="Confirm Password" />
//           <Agreement>By creating an Account</Agreement>
//         </Form>
//         <Button>Register</Button>
//       </Wrapper>
//     </Container>
//   );
// };
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

  width: 40%;
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
const Agreement = styled.span`
  font-size: 15px;
`;
const Link = styled.a`
  text-transform: uppercase;
  cursor: pointer;
  ${mobile({ fontSize: "15px", fontWeight: "500" })}/* gap: 10px; */
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-decoration: underline;
`;

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Register</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>By creating an Account</Agreement>

          {/*         
          <Agreement>By creating an Account</Agreement> */}
          <LinkContainer>
            <Link>Already have an account?</Link>
          </LinkContainer>
        </Form>
        <Button color="teal">Register</Button>
        <Button color="black">
          {" "}
          <GoogleIcon /> Sign-up With Google
        </Button>

        {/* <Button>Login</Button> */}
      </Wrapper>
    </Container>
  );
};
