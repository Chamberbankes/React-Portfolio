import React from 'react';
import { ContactForm } from './ContactForm';
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact</h1>
        <ContactForm />
      </div>
    </div>
  );
};
