// Contact.jsx

import { useState } from "react";

const Contact = () => {
  const [ isSubmit, setisSubmit ] = useState(false);
  const [isError, setIsError] = useState(false);
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setisSubmit(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const hasError = Object.values(formData).some((value) => {
      if (typeof value === 'object' && value !== null) {
        return Object.values(value).some((nestedValue) => nestedValue === '');
      }
      return value === '';
    });

    if (hasError) {
      setIsError(true);
      return;
    }

    setisSubmit(true);
    setIsError(false);
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  }

  return (
    <div className="md:h-screen md:w-1/1 p-8 py-16 md:py-20 my-4 md:my-0 md:px-16 leading-relaxed bg-dark-teal">
      <h1 className="text-lg pb-2">Let's work together!</h1>
      <p className="mt-2 font-thin">I’m currently open to exciting opportunities. Let’s create something great together.</p>
      {isSubmit && (
        <p className="my-8 text-deep-orange">Thank you for contacting me, I'll be in touch soon!</p>
      )}
      {isError ? <p aria-live="assertive" role="alert" className="mt-8 font-thin text-red-300">Please fill out all fields</p> : ''}
      <form className="w-1/2 flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input 
        type="text"
        placeholder="Enter your name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        aria-required="true"
        />
        <label htmlFor="email">Your Email</label>
        <input 
        placeholder="Enter your email address"
        id="email"
        value={formData.email}
        onChange={handleChange}
        aria-required="true"
        />
        <label htmlFor="message">Your Message</label>
        <textarea 
        className="border-b pb-2 mb-4 h-32 w-3/4 bg-transparent"
        placeholder="Your Message"
        id="message"
        value={formData.message}
        onChange={handleChange}
        aria-required="true"
        />
        <button className="self-start bg-light-orange p-4 text-black rounded-3xl">Let's Chat</button>
      </form>
    </div>
  )
}

export default Contact;