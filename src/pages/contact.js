import * as React from "react"
import { Link } from 'gatsby'
import '/css/style.css'

const ContactPage = () => {
  return (
    <>
      <section className="form-container">
        <span className="suggestion">
          <h3>Suggest a Book!</h3>
        </span>
        <div className="contact-form">
          <form
            method="post"
            action="https://forms.un-static.com/forms/7d2bbb06fc9ff16e29a9b6c2c051203ffbde84ac"
            class="form"
          >
            <label for="name" className="visuallyhidden">Name: </label>
            &nbsp;
            <input name="name" type="text"  placeholder="Name" />
            <label for="email" className="visuallyhidden">Email: </label>
            <input name="email" type="email" placeholder="Email" />
            <label for="comment" className="visuallyhidden">Comment: </label>
            <textarea
              name="comment"
              placeholder="What should we read next?"
              rows="5"
            ></textarea>
            <button type="submit" href="/">Submit</button>
          </form>
        </div>
      </section>
    </>
    )
}

export default ContactPage

export const Head = () => <title>Contact Us</title>
