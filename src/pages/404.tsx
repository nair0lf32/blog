import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { headingStyle, paragraphStyle } from "../components/layout";

//Custom 404
const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 style={headingStyle}>Page not found</h1>
      <p style={paragraphStyle}>
        Yeah, you managed to get lost... <br/><br/>
        It's all your fault and you should feel bad about it
        <Link to="/">Go home, Now!</Link>.
      </p>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
