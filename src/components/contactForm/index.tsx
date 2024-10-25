import * as React from "react";
import { FormEvent, useState } from "react";

import FormInput from "../formInput";
import Button from "../button";
import { phoneNumberRegex } from "../../constants/regex";
import "./index.css";

const ContactForm = ({ setIsFormSubmitted }) => {
  const formRecords = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: "",
  };

  const [formData, setFormData] = useState(formRecords);
  const [formErrors, setFormErrors] = useState(formRecords);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (value.trim() !== "") {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const validateFormFields = () => {
    const errors = formRecords;

    if (formData.firstName.trim() === "") {
      errors.firstName = "First name is invalid";
    }
    if (formData.lastName.trim() === "") {
      errors.lastName = "Last name is invalid";
    }
    if (!phoneNumberRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number is invalid";
    }
    if (formData.message.trim() === "") {
      errors.message = "Message is invalid";
    }

    return errors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateFormFields();
    if (
      Object.values(validationErrors).filter((item) => item.length > 0).length >
      0
    ) {
      setFormErrors(validationErrors);
    } else {
      setIsFormSubmitted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <section className="row">
        <FormInput
          name="firstName"
          placeholder="First name"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          minlength={2}
          errorMessage={formErrors.firstName}
          required
        />
        <FormInput
          name="lastName"
          placeholder="Last name"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          minlength={2}
          errorMessage={formErrors.lastName}
          required
        />
      </section>
      <FormInput
        name="phoneNumber"
        placeholder="Phone number"
        type="text"
        value={formData.phoneNumber}
        onChange={handleChange}
        errorMessage={formErrors.phoneNumber}
        required
        style="full"
      />
      <FormInput
        name="message"
        placeholder="What Service are you interested in?"
        type="text"
        value={formData.message}
        onChange={handleChange}
        minlength={2}
        errorMessage={formErrors.message}
        required
        style="full"
      />
      <Button type="submit" className="submitButton">
        SUBMIT NOW
      </Button>
    </form>
  );
};

export default ContactForm;
