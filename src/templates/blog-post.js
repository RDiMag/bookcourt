import React from "react"
import { graphql, Link } from "gatsby"


export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      }
    }
`
const BlogPost = props => {
  return (
    <>
      <Link to="/reviews/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost.publishedDate}
        </span>

      </div>
    </>
  )
}

export default BlogPost
