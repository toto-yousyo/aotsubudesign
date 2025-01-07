import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>Welcome to my Gatsby site</h1>
      <p>I'm making this by following the Gatsby Turotial.</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page </title>

export default IndexPage
