import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
.adapt-image {
    position: relative;

    span {
        position: unset !important;
        width: 100% !important;
        height: auto !important;

        img,
        svg {
            position: unset !important;
            width: 100% !important;
            height: auto !important;
        }
    }
}
`;

