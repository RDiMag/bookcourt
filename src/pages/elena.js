import * as React from "react"
import '/css/style.css'
import Navbar from "./navbar"
import elena from '../images/elena.png'

const Elena = () => {
  return (
    <>
     <Navbar />
      
    <section className="bio-container">
      <div className="bio-items">            
        <img src={elena} className="portrait" alt="Elena smiles into the camera. She is holding a small white dog."/>
          
          <p className="bio">Elena likes books and finds it difficult to stop reading once she’s already started; that makes book clubs difficult. Her favorite thing to do is to curl up with a book, her doggo Winifred, and a cup of coffee. She enjoys playing devil’s advocate for characters that COULD, maybe/hypothetically/somehow have a redemption arc. She’s also the most likely to spoil things for herself and any listeners, but mostly Brooke and Jamie. That also makes book clubs difficult.</p>
          
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