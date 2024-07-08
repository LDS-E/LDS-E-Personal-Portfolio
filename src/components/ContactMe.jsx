// ContactMe.jsx
import { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="h-screen flex items-center justify-center bg-backdark"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-start items-center text-center mb-8">
          <div className="bg-secondary h-1 w-32 mr-4"></div>
          <h1 className="text-white text-2xl font-bold">Send me a message!</h1>

          <div className="bg-secondary h-1 w-16 ml-4"></div>
        </div>

        <h2 className="text-white text-center mb-4">
          Got a question or proposal, or just want to say hello? Go ahead.
        </h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-6">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full py-3 px-4 rounded-lg bg-transparent border border-gray-300 text-white placeholder-white focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full py-3 px-4 rounded-lg bg-transparent border border-gray-300 text-white placeholder-white focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className="w-full py-3 px-4 rounded-lg bg-transparent border border-gray-300 text-white placeholder-white focus:outline-none focus:border-gray-500"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            {" "}
            {/* Flex container for centering */}
            <button
              type="submit"
              className="btn bg-primary text-black text-xl md:text-2xl py-2 px-4 rounded-md hover:font-bold hover:bg-secondary hover:text-white"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
