import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import '/css/style.css'
import Navbar from "./navbar"

const ReviewPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { createdAt: DESC }) {
          edges {
            node {
              body{
                raw
              }
              title
              id
              slug
              publishedDate(formatString: "Do MMMM, YYYY")
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <>
     <Navbar />

      <container className="container-post-list">
      <ul className="posts">
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li className="post" key={edge.node.id}>
                <div className="blog-details">
                  <p className="blog-post-title"> <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link></p>
                  <p className="excerpt">
                  {edge.node.excerpt.childMarkdownRemark.excerpt}
                  </p>
                  
                </div>
                
                <button className="read-more-button">
                  <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
                </button>
                
              </li>
            )
          })}
        </ul>
      </container>

     <footer>
        <small>&copy; Rachel DiMaggio 2022</small>
      </footer>

     </>
   
   )
 }
    

export default ReviewPage