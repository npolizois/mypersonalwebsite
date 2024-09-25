import React from "react";

const About: React.FC = () => {
  return (
    <div className="pt-16 md:pt-28 py-6 md:py-12 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-2 md:px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          About Me
        </h2>

        <div className="max-w-full md:max-w-4xl mx-auto text-gray-300 mb-8">
          <h4 className="text-xl md:text-2xl font-semibold text-white">
            💡 I am a <strong>Full Stack Web Developer</strong> with over 7
            years of industry experience, specializing in:
          </h4>
          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
            <li>Web Apps development for both the public and private sector</li>
            <li>Custom-made ERP systems using OOP methodology</li>
            <li>CMS-driven websites (MVC-L architecture)</li>
            <li>Affiliation & Dropshipping Systems for e-shops</li>
            <li>
              Following TDD coding standards and version control best practices
            </li>
          </ul>
          <p className="text-base md:text-lg mt-8">
            I offer a wide range of services, including:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
            <li>Custom theme and plugin development</li>
            <li>API interfaces (REST & GraphQL)</li>
            <li>Database administration and engineering</li>
            <li>DevOps responsibilities</li>
            <li>
              Experience in both large and small team environments, including
              roles as a team leader in start-up and corporate settings
            </li>
          </ul>
        </div>

        <div className="max-w-full md:max-w-4xl mx-auto text-gray-300 mb-8">
          <h4 className="text-xl md:text-2xl font-semibold text-white">
            💡 As an <strong>E-commerce Administrator</strong> with 2 years of
            experience, I have provided:
          </h4>

          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
            <li>Site building & management (CMS)</li>
            <li>Database administration</li>
            <li>SEO and digital marketing strategies</li>
          </ul>
        </div>

        <div className="max-w-full md:max-w-4xl mx-auto text-gray-300 mb-8">
          <h4 className="text-xl md:text-2xl font-semibold text-white">
            💡 I have also worked as an <strong>IT Specialist</strong> (1st -
            2nd level) with 4 years of successful experience in:
          </h4>
          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
            <li>Hardware and software maintenance</li>
            <li>
              Providing timely and positive responses to IT-related assistance
            </li>
            <li>Adhering to organizational confidentiality policies</li>
            <li>Working for large multinational companies</li>
          </ul>
        </div>

        <div className="max-w-full md:max-w-4xl mx-auto text-gray-300">
          <div className="mt-4">
            <a
              href="/#/experience"
              className="text-secondary hover:text-green-500 text-lg md:text-xl"
            >
              Check Out My Experience
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
