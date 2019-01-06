import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not Found" />
    <div className="page404 section">
      <h1>There's no page here!</h1>
      <Link className="link" to="/">
        Go Back!
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
