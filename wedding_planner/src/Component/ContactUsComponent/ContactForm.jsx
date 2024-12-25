// import "wedding_planner/src/css/ContactUs/Contact/Form.css";
import "../../css/ContactUs/ContactForm.css";
import contactForm from "../../image/contactForm .jpg";

function ContactForm() {
    return ( 
        <div className="contact-form-container">
        <div className="contact-form-content">
            {/* Left Section: Contact Information */}
            <div className="contact-form-info">
                <h1>Contact us</h1>
                <p>We're open for any suggestion or just to have a chat</p>

                <div className="contact-details">
                    <p><strong>ADDRESS:</strong><br />198 West 21th Street, Suite 721<br />New York NY 10016</p>
                    <p><strong>EMAIL:</strong><br />info@yoursite.com</p>
                    <p><strong>PHONE:</strong><br />+1235 2355 98</p>
                </div>
            </div>

            {/* Right Section: Image */}
            <div className="contact-form-image">
                <img
                    src={contactForm} /* Replace with your image URL */
                    alt="Beautiful Room"
                />
            </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-inputs">
            <form>
                <div className="input-group">
                    <input type="text" name="name" placeholder="Name" required />
                </div>
                <div className="input-group">
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="input-group">
                    <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div className="input-group">
                    <textarea name="message" placeholder="Create a message here" required></textarea>
                </div>
                <button type="submit" className="send-message-button">Send Message</button>
            </form>

           
        </div>
    </div>
     );
}

export default ContactForm;