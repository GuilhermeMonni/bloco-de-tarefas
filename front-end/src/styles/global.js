import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        margin: 0;
        paddind: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        overflow: hidden;
    }

    body{
        widht: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: #76BBF5;
    }
`

export default Global;