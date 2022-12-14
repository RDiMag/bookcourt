import * as React from "react"
import { Link } from 'gatsby'
import '/css/style.css'
import logo from '../images/fpo.jpg'
import { FaInstagramSquare, FaYoutube, FaDiscord } from 'react-icons/fa'

const IndexPage = () => {
  return (
    <>
    <nav>
      <h1 className="header">Book Court Book Club</h1>
      <div className="link">
        <Link to="/about/" className="nav">About Us</Link>
      </div>
    </nav>

    <section className="main">
      <img src={logo} alt="FPO element"/>
      <span className="social">
        <a href="https://www.instagram.com/highladiesofthebookcourt/">
          <FaInstagramSquare />
        </a>
        <a href="https://www.instagram.com/highladiesofthebookcourt/">
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com/highladiesofthebookcourt/">
          <FaDiscord />
        </a>
      </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>

      <section className="form-container">
        <span className="suggestion">
          <h3>Suggest a Book!</h3>
        </span>
        <div className="contact-form">
          <form
            method="post"
            action="https://forms.un-static.com/forms/7d2bbb06fc9ff16e29a9b6c2c051203ffbde84ac"
            class="form"
          >
            <label for="name" className="visuallyhidden">Name: </label>
            &nbsp;
            <input name="name" type="text"  placeholder="Name" />
            <label for="email" className="visuallyhidden">Email: </label>
            <input name="email" type="email" placeholder="Email" />
            <label for="comment" className="visuallyhidden">Comment: </label>
            <textarea
              name="comment"
              placeholder="What should we read next?"
              rows="5"
            ></textarea>
            <button type="submit" href="/">Submit</button>
          </form>
        </div>
      </section>
    </section>

    <footer>
      <small>&copy; Rachel DiMaggio 2022</small>
    </footer>
   </>
  )
}


export default IndexPage

export const Head = () => <title>Index Page</title>
