import * as React from "react"
import '/css/style.css'
import Navbar from "./navbar"
import brooke from '../images/brooke.jpg'

const Brooke = () => {
  return (
    <>
     <Navbar />
      
     <section className="bio-container">
        <div className="bio-items">
          <img src={brooke} className="portrait" alt="Brooke smiles into the camera."/>
          <p>
           Brooke has always been a lifelong reader, but at 10 years old she took one look at the copy of Harry Potter and the Sorcerer’s Stone that her mom had given to her, and decided it was too “big”. Then, a few months and many (smaller) books later, she was stuck on the couch with a cold, and her mom took the opportunity to read her the first chapter: The Boy Who Lived. Brooke never looked back. She devoured the rest of the book herself while she recovered, asked for the next two, and finished them both in one day. Her love for books has never wavered, and she still thinks nothing compares to staying up late to finish a book that’s captivated her. Brooke’s greatest love is romance, closely followed by fantasy. She also loves mystery, light science fiction, and graphic novels, but they all have to have a good love plot line to keep her hooked. However, she will give anything a try if you tell her why you loved it (and promise to discuss it with her).
          </p>
        </div>
        </section>    

      <footer>
        <small>&copy; Rachel DiMaggio 2022</small>
      </footer>
      
    </>
   
  )
}

export default Brooke

export const Head = () => <title>About Us - Brooke</title>

