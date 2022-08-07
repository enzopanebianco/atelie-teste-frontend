import { createGlobalStyle } from "styled-components"
import LatoRegular from '../assets/Lato/Lato-Regular.ttf'

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    @font-face {
        font-family: "Lato" ;
        src:  url(${LatoRegular}) format('truetype');
    }
    input,body,button,p,select,textarea{
        font-family:Lato;
    
    }
`

export default GlobalStyle