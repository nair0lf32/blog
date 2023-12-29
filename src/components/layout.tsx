import React from "react";

/* styles */
export const pageStyle = {
  margin: "1rem auto",
  maxWidth: 800,
  padding: "2rem 1rem",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#f2f2f2",
  color: "#333",
}

export const headingStyle = {
  marginTop: 0,
  marginBottom: 32,
  fontSize: "2rem",
  color: "#004080",
}

export const paragraphStyle = {
  marginBottom: 16,
  fontSize: "1rem",
}

/* Main layout */
export default function Layout({ children }: any) {
  return (
    <div style={pageStyle}>
      {children}
    </div>
  )
}
