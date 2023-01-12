import * as React from "react"
import { Link } from 'gatsby'
import '/css/style.css'
import { FaInstagramSquare, FaYoutube, FaDiscord } from 'react-icons/fa'

const SocialPage = () => {
  return (
    <>
      <section className="main">
      <span className="social">
        <a href="https://www.instagram.com/highladiesofthebookcourt/">
          <FaInstagramSquare />
        </a>
        <a href="https://www.youtube.com/@highladiesofthebookcourt6419/">
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com/highladiesofthebookcourt/">
          <FaDiscord />
        </a>
      </span>
      
    </section>
    </>
  )
}


export default SocialPage

export const Head = () => <title>Social Page</title>
