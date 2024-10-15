import classes from './Contact.module.css';
export default function ContactSection(){
    return <section id="contact" className={classes.contact_section}>
        <h2>Contact Me</h2>
        <form action="https://formspree.io/f/xzzbbvnz" method='POST'>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' required placeholder='Your email'/>
            </div>
            <div>
                <label htmlFor="message">Your message</label>
                <textarea id='message' name='message' required placeholder='Message'></textarea>
            </div>
            <button type="submit">Send</button>
        </form>
    </section>
}