import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo.tsx'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>DesignSystem</h1>
      <p>I'm making this by following the Gatsby Turotial.</p>
      <StaticImage
       alt="yellow black head bird"
       src="../images/lukasz-rawa-8Fafew_Y2yM-unsplash.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
