import * as React from "react"
import '/css/style.css'
import brooke from '../images/brooke.jpg'
import elena from '../images/elena.jpg'
import jamie from '../images/jamie.jpg'
import Navbar from "./navbar"

const AboutPage = () => {
  return (
    <>
     <Navbar />
           
    <section className="bio">
      <div className="container">

        <div>
          <span className="about">
            <img src={brooke} className="portrait" alt="Brooke smiles into the camera."/>
            <p className="bio">Brooke has always been a lifelong reader, but at 10 years old she took one look at the copy of Harry Potter and the Sorcerer’s Stone that her mom had given to her, and decided it was too “big”. Then, a few months and many (smaller) books later, she was stuck on the couch with a cold, and her mom took the opportunity to read her the first chapter: The Boy Who Lived. Brooke never looked back. She devoured the rest of the book herself while she recovered, asked for the next two, and finished them both in one day. Her love for books has never wavered, and she still thinks nothing compares to staying up late to finish a book that’s captivated her. Brooke’s greatest love is romance, closely followed by fantasy. She also loves mystery, light science fiction, and graphic novels, but they all have to have a good love plot line to keep her hooked. However, she will give anything a try if you tell her why you loved it (and promise to discuss it with her).</p>
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
          <p className="bio">Jamie has been a lover of books since middle school, so much that she would ditch her friends to spend time at the library and bookstores. Then she found her own love story and fell off reading for a couple years. In 2021, after marriage and a baby, she got into reading again, discovering new and amazing authors to obsess over. Her favorite genres are romance and fantasy, but she likes to delve into thriller/suspense and science fiction every now and then.</p>
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

