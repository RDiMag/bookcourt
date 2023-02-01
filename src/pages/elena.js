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
          
          <p className="bio">Coming soon!</p>
          
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