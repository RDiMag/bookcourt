import * as React from "react"
import '/css/style.css'
import Navbar from "./navbar"
import brooke from '../images/brooke.jpg'
import elena from '../images/elena.jpg'
import jamie from '../images/jamie.jpg'

const AboutPage = () => {
  return (
    <>
     <Navbar />
      <span className="about-header">Meet the Reviewers!</span>

      <section className="about-container">

          <div className="about">
            <img src={brooke} className="portrait" alt="Brooke smiles into the camera."/>
            <p>Brooke</p>
          </div>

          <div className="about">
            <img src={elena} className="portrait" alt="Elena smiles into the camera."/>
            <p>Elena</p>
          </div>

          <div className="about">
            <img src={jamie} className="portrait" alt="Jamie smiles into the camera."/>
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

