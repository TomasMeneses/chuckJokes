import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        
    }
    body{
        background: #cccc;
        font-family: 'Roboto', sans-serif;
        
    }

    body, input, textarea, button {
    font: 400 1rem "Inter", sans-serif;
    }

    button {
        cursor: pointer;
    }

`