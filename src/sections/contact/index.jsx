import { useState } from "react";

import Heading from "../../components/heading";
import Text from "../../components/text";
import contactModel from "../../models/contact.model";
import ContactForm from "../../components/contactForm";
import "./index.css";

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <div className="contact">
      <div className="container">
        <section className="info">
          <Heading level={2}>{contactModel.heading}</Heading>
          <Text className="text" size="14px">
            {contactModel.text}
          </Text>
        </section>
        <section className="template">
          {isFormSubmitted ? (
            <Text size="20px">Form submitted successfully</Text>
          ) : (
            <ContactForm setIsFormSubmitted={setIsFormSubmitted} />
          )}
        </section>
      </div>
    </div>
  );
};

export default Contact;
