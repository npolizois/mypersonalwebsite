import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="text-lg">
          <p>
            ✉️{" "}
            <a
              href="mailto:polyzois.nikos@gmail.com"
              className="text-blue-500 hover:underline"
            >
              polyzois.nikos@gmail.com
            </a>
          </p>
        </div>
        <div className="text-lg">
          <p>
            📱{" "}
            <a
              href="tel:+306972024894"
              className="text-blue-500 hover:underline"
            >
              +30 6972024894
            </a>
          </p>
        </div>
        <div className="text-lg">
          <p>
            💻 Skype: <span className="text-gray-700">nikos.polyzois</span>
          </p>
        </div>
        <div className="text-lg">
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/nikos-polyzois/"
              className="text-blue-500 hover:underline"
            >
              nikos-polyzois
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
