import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        --color-primary: #229660;
        --color-primary-variant: #176440;
        --color-secondary: #B0A990;
        --color-secondary-variant: #8C8069;
        --color-dark: #202030;
        --color-background: #F7F6F3;
        --color-surface: #F7F6F3;
        --color-error: #7B5151;
        --color-on-primary: #F7F6F3;
        --color-on-secondary: #202030;
        --color-on-background: #202030; 
        --color-on-surface: #202030; 
        --color-on-error: #F7F6F3;

        --shadow-primary: 0 4px 16px 0 var(--color-secondary);
        --shadow-secondary: 0 4px 16px 0 var(--color-primary);

        --text-title: montserrat, Arial, Helvetica, sans-serif;
    }
`;
