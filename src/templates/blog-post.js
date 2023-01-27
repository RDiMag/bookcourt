import React from "react"
import Navbar from "../pages/navbar"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import {renderRichText} from "gatsby-source-contentful/rich-text"

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="inner-blog-para">{children}</p>
  },
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      body {
        raw
      }
    }
  }
`
const BlogPost = props => {
  return (
    <> 
    <Navbar />
      <container className="blog-post-container">
        {/* <Link to="/reviews/">Visit the Blog Page</Link> */}
      <div className="blog-content">
        <h1 className="post-title">{props.data.contentfulBlogPost.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost.publishedDate}
        </span>
        <p className="blogpost">{renderRichText(props.data.contentfulBlogPost.body, options)}</p>
      </div>
      </container>
      
      <footer>
        <small>&copy; Rachel DiMaggio 2022</small>
      </footer>

    </>
  )
}

export default BlogPost
