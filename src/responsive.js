import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (min-width: 320px) and (max-width: 480px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 380px;) {
      ${props}
    }
  `;
};