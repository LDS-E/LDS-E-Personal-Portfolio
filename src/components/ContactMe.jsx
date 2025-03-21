import { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      access_key: import.meta.env.VITE_WEB3FORMS_API_KEY,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      setStatus("There was an error sending your message. Please try again.");
    }
  };

  return (
    <section
      id="contact-section"
      className="h-screen flex items-center justify-center bg-secondary"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-text mb-4 relative title p-4">
            <span className="relative z-10">Send me a message</span>
            <div className="absolute left-0 right-0 bottom-0 mx-auto bg-accent h-1 w-1/2 mt-2"></div>
          </h2>
          <p className="text-lg text-text subtitulo">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input input-bordered w-full py-4 px-4 rounded-lg text-white bg-transparent focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary border-2 border-gray-400 focus:border-2 focus:border-primary fonte-texto"
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
              className="input input-bordered w-full py-4 px-4 rounded-lg text-white bg-transparent focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary border-2 border-gray-400 focus:border-2 focus:border-primary fonte-texto"
              required
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full py-4 px-4 rounded-lg text-white bg-transparent focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary border-2 border-gray-400 focus:border-2 focus:border-primary fonte-texto"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-lg bg-accent text-white hover:bg-primary px-6 py-3 rounded-lg transition duration-300 self-center"
            >
              Send
            </button>
          </div>
        </form>

        {status && (
          <div className="mt-4 text-center">
            <p className="text-lg text-white">{status}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactMe;
