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
          found it! Want to read along with us week by week, watch the
          episodes on YouTube, and discuss theories and favorite scenes over in
          the Discord channel? This is your book club! 
          </p>
          <p>Do you want to read at your own pace, watch the episodes whenever you get to the next section, and
          just browse the chats? Come on over! Want to watch people react to your
          favorite books and usually be entirely wrong in their predictions for
          what’s coming next? We are here to entertain!
          </p>
          <p>No matter what it is
          you’re looking for, we’re that group of people you’ve always wished you
          had, who either love books as much as you do, or can help you discover
          that love again. Pick up a copy of our current book, check out the
          latest episode, or suggest the book you want to read with us next. We’re
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
