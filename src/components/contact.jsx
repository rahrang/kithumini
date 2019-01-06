import React from 'react';

const Contact = () => (
  <div className="contact section">
    <h3 className="header">Contact Me!</h3>
    <div className="form-wrapper">
      <form name="contact" method="POST" action="/" data-netlify>
        <div className="contact__info">
          <label>
            <div className="label">Your Name</div>
            <input type="text" name="name" required />
          </label>
          <label>
            <div className="label">Your Email</div>
            <input type="email" name="email" required />
          </label>
        </div>
        <label>
          <div className="label">Message</div>
          <textarea className="message" name="message" required />
        </label>
        <div data-netlify-recaptcha />
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
);

export default Contact;
