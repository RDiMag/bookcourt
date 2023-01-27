import * as React from "react"
import '/css/style.css'
import { FaInstagramSquare, FaYoutube, FaDiscord } from 'react-icons/fa'

const SocialSideNav = () => {
  return (
    <>
      <section className="social-nav">
      <span className="social">
        <a href="https://www.instagram.com/highladiesofthebookcourt/">
          <FaInstagramSquare />
        </a>
        <a href="https://www.youtube.com/@highladiesofthebookcourt6419/">
          <FaYoutube />
        </a>
        <a href="https://discord.gg/9D3HU9euf5">
          <FaDiscord />
        </a>
      </span>
      
    </section>
    </>
  )
}


export default SocialSideNav

export const Head = () => <title>Social Links</title>
