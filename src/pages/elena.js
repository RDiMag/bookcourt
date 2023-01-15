import * as React from "react"
import '/css/style.css'
import Navbar from "./navbar"
import elena from '../images/elena.jpg'

const Elena = () => {
  return (
    <>
     <Navbar />
      
    <section className="bio-container">
      <div className="bio-items">            
        <img src={elena} className="portrait" alt="Elena smiles into the camera."/>
          
          <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          
        </div>  
    
    </section>
     

      <footer>
        <small>&copy; Rachel DiMaggio 2022</small>
      </footer>
      
    </>
   
  )
}

export default Elena

export const Head = () => <title>About Us - Elena</title>