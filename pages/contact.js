import { useForm, ValidationError } from '@formspree/react';
import Layout from "../components/layout"
import styles from "../styles/contact.module.css"

function ContactForm() {
    const [state, handleSubmit] = useForm("xbjqaaqw");
    if (state.succeeded) {
        return <p>Thank you.</p>;
    }
    return (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <span>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" />
            <ValidationError 
              prefix="First Name" 
              field="fname"
              errors={state.errors}
            />
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" />
            <ValidationError 
              prefix="Last Name" 
              field="lname"
              errors={state.errors}
            />
            <label htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </span>
          <span>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </span>
      </form>
    );
  }
  

export default function Contact() {

    return (
        <Layout>
          <h1>Contact us</h1>
            <ContactForm />
        </Layout>
    )
}