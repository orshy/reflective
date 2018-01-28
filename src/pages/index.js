import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import pic01 from '../images/pic01.jpg'

class BlogIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allMarkdownRemark.edges')

        return ( <
            div >
            <
            Helmet >
            <
            title > {get(this, 'props.data.site.siteMetadata.title') } < /title> <
            meta name = "description"
            content = {get(this, 'props.data.site.siteMetadata.description') }
            /> <
            /Helmet> <
            video autoPlay loop id = "bg-video"
            poster = "../images/tree-mobile.jpg.jpg" >
            <
            source src = "https://s3-us-west-2.amazonaws.com/kameronjohnson/treetop.mp4"
            type = "video/mp4" / > Your browser does not support the video tag.I suggest you upgrade your browser. <
            /video>

            <
            /div>
        )
    }
}

BlogIndex.propTypes = {
    route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql `
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`