import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Page Not Found</h1>
    <p>Woops. Looks like this page doesn't exist.</p>
  </Layout>
)

export default NotFoundPage