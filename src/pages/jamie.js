import * as React from "react"
import '/css/style.css'
import Navbar from "./navbar"
import jamie from '../images/jamie.jpg'

const Jamie = () => {
  return (
    <>
     <Navbar />
      
      <div>
        <span className="about">
          <img src={jamie} className="portrait" alt="Jamie smiles into the camera."/>
        <p className="bio">Jamie has been a lover of books since middle school, so much that she would ditch her friends to spend time at the library and bookstores. Then she found her own love story and fell off reading for a couple years. In 2021, after marriage and a baby, she got into reading again, discovering new and amazing authors to obsess over. Her favorite genres are romance and fantasy, but she likes to delve into thriller/suspense and science fiction every now and then.</p>
        </span>
      </div>

      <footer>
        <small>&copy; Rachel DiMaggio 2022</small>
      </footer>
      
    </>
   
  )
}

export default Jamie

export const Head = () => <title>About Us - Jamie</title>
