import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Landing from '../components/landing';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Kithumini Jayasiri" />
    <Landing />
    <About />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
