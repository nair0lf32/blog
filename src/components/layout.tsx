import React from "react";

//Styles
export const pageStyle = {
    margin: `3rem auto`, maxWidth: 650,
    padding: `0 1rem`, fontFamily: `-apple-system, Roboto, sans-serif, serif`,
    backgroundColor: `#f5f5f5`, color: `#232129`,
}

export const headingStyle = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

export const paragraphStyle = {
  marginBottom: 48,
}

export const codeStyle = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

/* Main layout */
export default function Layout({ data, children }: any) {
    return (
        <body style={pageStyle}>
            { children }
        </body>
  )
}
