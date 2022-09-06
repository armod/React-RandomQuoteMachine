import React from 'react'
import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
  }
  *, *+* {
    padding: 0;
    margin: 0;
  }
  ul {
    display: flex;
    list-style-type: none;
  }
  a {
    text-decoration: none;
    margin: 5px;
  }
  a:visited {
    color: black;
  }
  a:hover {
    color: blue;
  }
`

const Layout = ({children}) => {
  return (
    <>
        <GlobalStyles />
        {children}
    </>
  )
}

export default Layout
