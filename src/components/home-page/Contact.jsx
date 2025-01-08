// Contact.jsx

import { useState } from "react";

const Contact = () => {
  const [ isSubmit, setisSubmit ] = useState(false);
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
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setisSubmit(true);
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  }

  return (
    <div className="p-8 py-16 my-4 leading-relaxed">
      <h1 className="text-lg pb-2">Let's work together!</h1>
      <p className="mt-2 font-thin">I’m currently open to exciting opportunities. Let’s create something great together.</p>
      <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
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