import React from "react";

/* styles */
export const pageStyle = {
  margin: `1rem auto`,
  maxWidth: 800,
  padding: `0 1rem`,
  fontFamily: `-apple-system, Roboto, sans-serif, serif`,
  backgroundColor: `#f5f5f5`,
  color: `#232129`,
}

export const headingStyle = {
  marginTop: 0,
  marginBottom: 32,
  fontSize: "2rem",
}

export const paragraphStyle = {
  marginBottom: 16,
  fontSize: "1rem",
}

export const codeStyle = {
  color: "#fff",
  padding: "0.5rem",
  backgroundColor: "#1e1e1e",
  fontSize: "1rem",
  borderRadius: 4,
  overflowX: "auto",
}

/* Main layout */
export default function Layout({ children }: any) {
  return (
    <div style={pageStyle}>
      {children}
    </div>
  )
}
