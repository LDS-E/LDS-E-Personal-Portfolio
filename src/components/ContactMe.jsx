// ContactMe.jsx
import { useState } from 'react';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o formulário, como fazer uma solicitação HTTP para um servidor.
        console.log(formData);
    };

    return (
        <section id="contact" className="h-screen flex items-center justify-center bg-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="mb-6">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full py-3 px-4 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-gray-500"
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
                            className="w-full py-3 px-4 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-gray-500"
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
                            className="w-full py-3 px-4 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-gray-500"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-900">Send</button>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;