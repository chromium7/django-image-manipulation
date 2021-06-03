import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        --color-text: #333333;
        --color-primary: #123123;

        --animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        --animation-duration: 1s;
    }
`;
