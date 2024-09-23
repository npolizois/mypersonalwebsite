import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
        <p className="text-lg text-center">
          Reach out to me at{" "}
          <a href="mailto:nikospolyzois@example.com" className="text-blue-500">
            nikospolyzois@example.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
