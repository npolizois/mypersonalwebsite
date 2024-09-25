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
            <li>
              <strong>Web Apps</strong> development for both the public and
              private sector
            </li>
            <li>
              Custom-made <strong>ERP</strong> systems using{" "}
              <strong>OOP</strong> methodology
            </li>
            <li>
              CMS-driven websites (<strong>MVC-L</strong> architecture)
            </li>
            <li>
              <strong>Affiliation</strong> & <strong>Dropshipping</strong>{" "}
              System for e-shops
            </li>
            <li>
              Following <strong>TDD</strong> coding standards and version
              control best practices
            </li>
          </ul>
          <p className="text-base md:text-lg mt-8">
            I offer a wide range of services, including:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
            <li>
              <strong>Custom theme</strong> and <strong>plugin</strong>{" "}
              development
            </li>
            <li>
              <strong>API</strong> interfaces (<strong>REST</strong> &{" "}
              <strong>GraphQL</strong>)
            </li>
            <li>
              <strong>Database</strong> administration and engineering
            </li>
            <li>
              <strong>DevOps</strong> responsibilities
            </li>
            <li>
              Experience in both large and small team environments, including
              roles as a team leader in start-up and corporate settings
            </li>
          </ul>
          <p className="text-base mt-8">
            In my work, I utilize advanced <strong>AI Tools</strong> to enhance
            my productivity and streamline my development process. These tools
            assist me in problem-solving and refining my ideas, helping me
            deliver high-quality results more efficiently.
          </p>
        </div>

        <div className="max-w-full md:max-w-4xl mx-auto text-gray-300 mb-8">
          <h4 className="text-xl md:text-2xl font-semibold text-white">
            💡 As an <strong>E-commerce Administrator</strong> with 2 years of
            experience, I have provided:
          </h4>

          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
            <li>
              Site building & management <strong>(CMS)</strong>
            </li>
            <li>Database administration</li>
            <li>
              <strong>SEO</strong> and digital marketing strategies
            </li>
          </ul>
        </div>

        <div className="max-w-full md:max-w-4xl mx-auto text-gray-300 mb-8">
          <h4 className="text-xl md:text-2xl font-semibold text-white">
            💡 I have also worked as an <strong>IT Specialist</strong> (1st -
            2nd level) with 4 years of successful experience in:
          </h4>
          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
            <li>
              <strong>Hardware</strong> and <strong>software</strong>{" "}
              maintenance
            </li>
            <li>
              Providing timely and positive responses to IT-related assistance
            </li>
            <li>Adhering to organizational confidentiality policies</li>
            <li>
              Working for large <strong>multinational</strong> companies
            </li>
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
