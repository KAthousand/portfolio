import React from "react";
import "../Contact/Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactCard from "../../components/ContactCard/ContactCard";
function Contact(props) {
  return (
    <div className="contact-container">
      <ContactCard />
      <ContactForm />
    </div>
  );
}

export default Contact;
