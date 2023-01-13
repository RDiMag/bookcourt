import * as React from "react"
import { Link } from 'gatsby'
import '/css/style.css'
import logo from '../images/bookcourtlogo.png'

const IndexPage = () => {
  return (
    <>
      <nav className="header">
        <div className="link" id="item-1">
          <Link to="/" className="nav">Reviews</Link>
        </div>
        <div className="link" id="item-2">
          <Link to="/about/" className="nav">About Us</Link>
        </div>
      </nav>

    <section className="hero">
      <div className="hero-div-item1">
        <img src={logo} className="hero-img" alt="bookcourt book club logo"></img>
      </div>
      <div className="hero-div-item2">
        <p>
          If you’ve been looking for a new book club, congratulations: you’ve
          found it!</p>
          &nbsp;
          <p>Pick up a copy of our current book, check out the latest episode, or suggest the book you want to read with us next. We’re
          so excited to read your next favorite book together!
          </p>
      </div>
      
    </section>
    
    <footer>
        <small>&copy; Rachel DiMaggio 2022</small>
    </footer>
   </>
   )
  }


export default IndexPage

export const Head = () => <title>Index Page</title>
