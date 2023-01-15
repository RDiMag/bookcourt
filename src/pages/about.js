import * as React from "react"
import '/css/style.css'
import Navbar from "./navbar"
import { Link } from 'gatsby'
import brooke from '../images/brooke.png'
import elena from '../images/elena.png'
import jamie from '../images/jamie.png'

const AboutPage = () => {
  return (
    <>
     <Navbar />
      
        <span className="about-header">Meet the Reviewers!</span>

      <section className="about-container">

          <div className="about">
            <Link to="/brooke/">
              <img src={brooke} className="portrait" alt="Brooke smiles into the camera."/>
            </Link> 
           <p>Brooke</p>  
            
          </div>

          <div className="about">
            <Link to="/elena/">
             <img src={elena} className="portrait" alt="Elena smiles into the camera."/>
            </Link>
            <p>Elena</p>
          </div>

          <div className="about">
            <Link to="/jamie/">
              <img src={jamie} className="portrait" alt="Jamie smiles into the camera."/>
            </Link>
            <p>Jamie</p>
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

