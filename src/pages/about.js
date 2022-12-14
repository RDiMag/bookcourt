import * as React from "react"
import { Link } from 'gatsby'
import '/css/style.css'
import brooke from '../images/brooke.jpg'
import elena from '../images/elena.jpg'
import jamie from '../images/jamie.jpg'

const AboutPage = () => {
  return (
    <>
      <nav>      
        <h1>Meet the Reviewers</h1>
        <div className="link">
          <Link to="/" className="nav">Home</Link>
        </div>
      </nav>

      
    <section className="bio">
      <div className="container">

        <div>
          <span className="about">
            <img src={brooke} className="portrait" alt="Brooke smiles into the camera."/>
            <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</p>
          </span>
        </div>
          
        <div>
          <span className="about">            
            <img src={elena} className="portrait" alt="Elena smiles into the camera."/>
            <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.</p>
          </span>
        </div>
          
         <div>
          <span className="about">
            <img src={jamie} className="portrait" alt="Jamie smiles into the camera."/>
          <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</p>
          </span>
        </div>

      </div>
    </section>

      <footer>
        <small>&copy; Rachel DiMaggio 2022</small>
      </footer>
      
    </>
   
  )
}

export default AboutPage

export const Head = () => <title>About Us</title>

