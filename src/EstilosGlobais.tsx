import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url('/src/assets/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: url('/src/assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf') format('truetype');
    }
`;

export default GlobalStyles