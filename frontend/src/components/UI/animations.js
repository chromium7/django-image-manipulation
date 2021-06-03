import { keyframes } from "styled-components";

export const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(50%);
    }
    to {
        opacity: 1;
        transform: none;
    }
`;

export const reverseZoomIn = keyframes`
    from {
        opacity: 0;
        transform: scale(1.5);
    }
    
    to {
        opacity: 1;
        transform: none;
    }
`;
