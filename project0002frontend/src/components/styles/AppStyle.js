import { createGlobalStyle } from 'styled-components'
import CahFont from 'assets/fonts/CahFont.woff2'
import BlackOpsOne from 'assets/fonts/black-ops-one-v12-latin-regular.woff2'

const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'Helvetica Neue LT Pro';
      src: url(${CahFont}) format('woff2')
    }
    @font-face {
      font-family: 'Black Ops One';
      src:url(${BlackOpsOne}) format('woff2')
    }

  * {
    box-sizing: border-box;
  }
  html,body,#root {
    background: ${({ theme }) => theme.colors.body};
    width:100%;
    height:100%;
    font-family:  ${({ theme }) => theme.fontFamily};
    margin: 0;
    overflow: hidden;
    transition: all 0.5s linear;
  }
`

export default GlobalStyles