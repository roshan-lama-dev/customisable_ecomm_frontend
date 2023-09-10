import { styled } from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  /* text-align: center; */

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  /* font-size: x-large
  ; */
  font-style: italic;
  font-size: 14px;
`;

export const Announcement = () => {
  return <Container>Deal Free Shipping on Orders Over $50</Container>;
};
