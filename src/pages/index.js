import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Landing from '../components/landing';
import About from '../components/about';
import Footer from '../components/footer';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Kithumini Jayasiri"
      keywords={[
        `student`,
        `athlete`,
        `running`,
        `health`,
        `healthy`,
        `nutrition`,
        `science`,
      ]}
    />
    <Landing />
    <About />
    <Footer />
  </Layout>
);

export default IndexPage;
