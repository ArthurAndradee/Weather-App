import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vh;
        height: 100%;
        width: 100%;
    }
    html {
        background: #2E2E2E;
    }
    :root {
    --light: #FFFFFF;
    --dark: #000000;
    }
`;