import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 - Kithumini Jayasiri" />
    <h1>There's no page here!</h1>
    <Link to="/">Go Back!</Link>
  </Layout>
);

export default NotFoundPage;
