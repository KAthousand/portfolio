import React, { useState } from "react";
import "../ContactForm/ContactForm.css";
function ContactForm(props) {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-content">
        <h1>Say Hello</h1>
        <form>
          <label>
            <input
              name="email"
              placeholder="Email..."
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              name="subject"
              placeholder="Subject..."
              value={formData.subject}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <textarea
              name="message"
              placeholder="Message..."
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
