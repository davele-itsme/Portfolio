import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>David Le</h1>
      <p>Curious Software Engineering Major based in Europe</p>
      <p>
        <Link to="/about/">About</Link> <br />
        <Link to="/work/">Work</Link>
        <Link to="/contact/">Contact</Link>
      </p>
    </Layout>
  );
}

export default IndexPage;
