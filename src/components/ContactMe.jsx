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
    <section className="h-screen flex items-center justify-center bg-neutral">
      <div className="container mx-auto px-4">
        <div className="flex justify-start items-center text-center mb-8">
          <div className="bg-primary h-1 w-32 mr-4"></div>
          <h1 className="text-white text-2xl font-bold">Send me a message!</h1>
          <div className="bg-primary h-1 w-16 ml-4"></div>
        </div>

        <h2 className="text-white text-center mb-4 text-xl">
          Got a question or proposal, or just want to say hello? Go ahead.
        </h2>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input input-bordered w-full py-3 px-4 rounded-lg text-white bg-transparent focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="input input-bordered w-full py-3 px-4 rounded-lg text-white bg-transparent focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full py-3 px-4 rounded-lg text-white bg-transparent focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-primary text-white text-xl md:text-2xl py-2 px-6 rounded-md hover:bg-secondary hover:text-black transition-all"
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
