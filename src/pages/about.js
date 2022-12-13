import * as React from "react"
import { Link } from 'gatsby'
import '/css/style.css'

const AboutPage = () => {
  return (
    <>
      <nav>
        <h1>Meet the Reviewers</h1>
        <div className="link">
          <Link to="/" className="nav">Home</Link>
        </div>
      </nav>

      <footer>
        <small>&copy; Rachel DiMaggio 2022</small>
      </footer>
      
    </>
   
  )
}

export default AboutPage

export const Head = () => <title>About Us</title>

