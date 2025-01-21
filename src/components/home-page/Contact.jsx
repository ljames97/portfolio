// Contact.jsx

import { useRef, useState } from "react";
import { useInView } from "../hooks/useInView";

const Contact = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
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
      setisSubmit(false);
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

  const isSectionVisible = useInView(sectionRef, { threshold: 0.3 });
  if (isSectionVisible && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div ref={sectionRef} className="text-black md:flex md:flex-col md:justify-center md:items-center md:h-screen md:w-1/1 p-8 py-24 md:py-20 md:my-0 md:px-16 leading-relaxed bg-off-white dark:bg-off-white">
        <h1 className="text-4xl font-thin pb-2 transition-opacity transition-transform ease-out"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'transform 1s ease-out, opacity 1s ease-out',
            }}
        >
          Let's work together!</h1>
        <p className="mt-4 md:mt-2 font-thin text-xl md:w-1/2 transition-opacity transition-transform ease-out"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'transform 1s ease-out, opacity 1s ease-out',
            }}
        >
          I’m currently open to exciting opportunities. Let’s create something great together.</p>
        {isSubmit && (
          <p className="-mb-4 mt-4 text-deep-orange">Thank you for contacting me, I'll be in touch soon!</p>
        )}
        {isError ? <p aria-live="assertive" role="alert" className="-mb-4 mt-4 font-thin text-red-300">Please fill out all fields</p> : ''}
        <form className="md:w-1/2 flex flex-col gap-8 mt-16 transition-opacity transition-transform ease-out"
              style={{
                opacity: hasAnimated ? 1 : 0,
                transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
                transition: 'transform 1s ease-out, opacity 1s ease-out',
              }}
              onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="flex flex-col md:w-1/2">
              <label htmlFor="name" className="text-sm mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                aria-required="true"
                className="border-b dark:border-black pb-2 bg-transparent"
              />
            </div>
            <div className="flex flex-col md:w-1/2">
              <label htmlFor="email" className="text-sm mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                id="email"
                value={formData.email}
                onChange={handleChange}
                aria-required="true"
                className="border-b dark:border-black pb-2 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm mb-2">Your Message</label>
            <textarea
              className="resize-none border-b border-black pb-2 h-16 bg-transparent"
              placeholder="Hi, I'd like to work with you on a new project, can we arrange a time to discuss this?"
              id="message"
              value={formData.message}
              onChange={handleChange}
              aria-required="true"
            />
          </div>
          <button className="w-1/3 bg-accent hover:bg-hover-accent p-4 text-black rounded-3xl mt-8">
            Let's Chat!
          </button>
        </form>
      </div>
  )
}

export default Contact;