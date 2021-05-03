import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>David Le</h1>
    <p>Curious Software Engineering Major based in Europe</p>
    <p>
      <Link to="/about/">About</Link> <br />
      <Link to="/projects/">Projects</Link>
      <Link to="/contact/">Contact</Link>
    </p>
  </Layout>
)

export default IndexPage
