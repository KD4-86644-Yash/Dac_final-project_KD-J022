import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import "../css/ContactUs/contact-us-heading.css";
import ContactForm from "../Component/ContactUsComponent/ContactForm";
import FAQ from "../Component/ContactUsComponent/FAQ";

<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Poppins:wght@400;700&display=swap" rel="stylesheet"/>


function ContactUs() {

    const heading = "Contact Us";

    return (  <div>
        <NavBar />
        <div className="contact-us-heading">
                <h1>
                    {heading.split("").map((letter, index) => (
                        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            {letter === " " ? "\u00A0" : letter}
                        </span>
                    ))}
                </h1>
            </div>
        <br />
        <br/>   
        <ContactForm/>    
        <FAQ/>    
        <Footer />
    </div> );
}

export default ContactUs;