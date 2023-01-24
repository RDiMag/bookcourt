import * as React from "react"
import { Link } from 'gatsby'
import '/css/style.css'


const Navbar = () => {
  return (
    <>
    <nav className="header">
        <div className="link">
          <Link to="/" className="nav-link">Home</Link>
        </div>
        <div className="link">
          <Link to="/about/" className="nav-link">About Us</Link>
        </div>
        <div className="link">
          <Link to="/reviews/" className="nav-link">Reviews</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar

// export const Head = () => <title>Navbar</title>
