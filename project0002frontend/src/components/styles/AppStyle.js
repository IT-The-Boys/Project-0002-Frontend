import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    /* color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em; */
    margin: 0;
    transition: all 0.5s linear;
  }
`

export default GlobalStyles