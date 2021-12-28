import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <h1>404: Page Not Found</h1>
      <p>Woops. Looks like this page doesn&#39;t exist.</p>
    </Layout>
  );
}

export default NotFoundPage;
