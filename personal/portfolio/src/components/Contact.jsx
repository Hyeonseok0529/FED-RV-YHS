import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg border border-gray-300" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg border border-gray-300" />
          <textarea placeholder="Your Message" className="w-full px-4 py-2 rounded-lg border border-gray-300" rows="4"></textarea>
          <button type="submit" className="w-full py-2 px-4 bg-blue-800 hover:bg-blue-700 rounded-lg text-white">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;