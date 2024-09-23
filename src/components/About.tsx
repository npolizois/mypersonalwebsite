import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-800 mb-4">
            💡 I am a <strong>Full Stack Web Developer</strong> (front end
            focused) with over 7 years of industry experience, specializing in:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-800">
            <li>
              Web Apps development for both the public sector (European
              Commission, CPVO, OPAP) and the private sector
            </li>
            <li>
              Custom-made ERP systems, built from scratch using OOP methodology
            </li>
            <li>CMS-driven websites (MVC-L architecture)</li>
            <li>Affiliation & Dropshipping Systems for e-shops</li>
            <li>
              Following TDD coding standards and version control best practices
            </li>
          </ul>
          <p className="text-lg text-gray-800 mb-4">
            I offer a wide range of services, including:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-800">
            <li>Custom theme and plugin development</li>
            <li>API interfaces (REST & GraphQL)</li>
            <li>Database administration and engineering</li>
            <li>DevOps responsibilities</li>
            <li>
              Experience in both large and small team environments, including
              roles as a team leader in start-up and corporate settings
            </li>
          </ul>
          <p className="text-lg text-gray-800 mb-4">
            💡 As an <strong>E-commerce Administrator</strong> with 2 years of
            experience, I have provided:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-800">
            <li>Site building & management (CMS)</li>
            <li>Database administration</li>
            <li>SEO and digital marketing strategies</li>
          </ul>
          <p className="text-lg text-gray-800 mb-4">
            💡 I have also worked as an <strong>IT Specialist</strong> (1st -
            2nd level) with 4 years of successful experience in:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-800">
            <li>Hardware and software maintenance</li>
            <li>
              Providing timely and positive responses to IT-related assistance
            </li>
            <li>Adhering to organizational confidentiality policies</li>
            <li>Working for large multinational companies</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
