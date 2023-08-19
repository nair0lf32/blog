import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default function Home() {
  return (
    <Layout>
      <Link to={'/posts'}>All posts</Link>
    </Layout>
  )
}