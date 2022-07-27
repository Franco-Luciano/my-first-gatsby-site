// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt='an image of a black hole' src='https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/01/19/16425908838658.jpg'/>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage