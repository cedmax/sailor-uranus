import React from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import theme from 'styled/palette.json'
import Tattoo from 'styled/tattoo.woff'

injectGlobal`
  @font-face {
    font-family: Tattoo;
    src: url(${Tattoo});
  }

  body {
    background: ${theme.background};
    color: #fff;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box
  }
`

theme.fontFamily = 'Tattoo'

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)