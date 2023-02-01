import styled, { css } from "styled-components";
// eslint-disable-next-line
export const Userbox = styled.div`
  ${({ radius, width, height, padding, margin }) =>
    css`
      background: #81d8cf;
      border-radius: ${radius || "5px"};
      width: ${width || "100%"};
      height: ${height || "100%"};
      padding: ${padding || "1em"};
      margin: ${margin || "5px"};
      display: flex;
      align-items: center;
    `}
`;
