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
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
            <label htmlFor="phone">Phone/Telegram:</label>
            <input type="tel" id="phone" name="phone" />
            <ValidationError 
              prefix="Phone" 
              field="phone"
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
            <div className={styles.contactContainer}>
            <ContactForm />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2324.3189114465767!2d104.92582309996094!3d11.550216269554296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951834c548605%3A0x4b931f0c8bc93776!2sYeakSa%20Esports!5e0!3m2!1sen!2skh!4v1626684967570!5m2!1sen!2skh" 
                style={{border:0}} 
                allowFullScreen
                className={styles.googleMaps}
                loading="lazy"
              >  
              </iframe>

            </div>
        </Layout>
    )
}