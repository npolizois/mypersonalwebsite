import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Professional Experience
        </h2>

        {/* PlayerDex */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold">
            Senior Full Stack Web Application Developer (Lead Dev)
          </h3>
          <p className="text-gray-600">PlayerDex · Full-time</p>
          <p className="text-gray-600">
            Dec 2023 - Present · Filothei-Psychiko, Attiki, Greece · Remote
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-800">
            <li>
              Lead development and maintenance of client-side and server-side
              applications in a start-up environment.
            </li>
            <li>Front-end development using React.js & Ionic React.</li>
            <li>
              Back-end development with Node.js, Express.js, and GraphQL APIs.
            </li>
            <li>
              Cloud management on AWS (EC2, S3, Route 53, CloudFront,
              Certificate Manager).
            </li>
            <li>
              Version control via GitHub; Agile methodologies using Atlassian
              tools (JIRA, Confluence).
            </li>
            <li>DevOps: Automated deployments with PM2, Certbot.</li>
          </ul>
        </div>

        {/* VASS IT Greece */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold">
            Web Application Developer (SAD - TeCo)
          </h3>
          <p className="text-gray-600">VASS IT GREECE · Full-time</p>
          <p className="text-gray-600">
            Aug 2021 - Dec 2023 · Gerakas, Attiki, Greece · Remote
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-800">
            <li>
              Developed projects for the European Commission, CPVO, and OPAP.
            </li>
            <li>Front-end development using React.js & Typescript, Angular.</li>
            <li>
              Back-end development using Node.js (REST APIs) and database
              management (MySQL, Oracle).
            </li>
            <li>E2E testing using Cypress, Unit testing with Angular CLI.</li>
            <li>
              Agile methodologies with Atlassian tools (JIRA, Confluence);
              version control using GitLab.
            </li>
          </ul>
        </div>

        {/* Ecodress */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold">Full Stack Web Developer</h3>
          <p className="text-gray-600">
            Ecodress Branded Clothes By Kilo · Full-time
          </p>
          <p className="text-gray-600">
            Sep 2017 - Aug 2021 · Metamorfosi, Attiki, Greece · Hybrid
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-800">
            <li>
              Built a custom ERP system from scratch with TDD coding standards.
            </li>
            <li>
              Developed on Node.js (back-end) and React.js with Material UI
              (front-end).
            </li>
            <li>Database administration with MySQL and MariaDB.</li>
            <li>
              Implemented unit and integration testing with Mocha, Sinon, Chai.
            </li>
            <li>
              Developed websites (WordPress) and e-commerce systems (OpenCart)
              integrated with the ERP.
            </li>
          </ul>
        </div>

        {/* Additional Experience */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold">Additional Experience</h3>
          <ul className="list-disc list-inside mt-2 text-gray-800">
            <li>
              <strong>E-commerce Administrator</strong> | Ecodress Branded
              Clothes By Kilo · Nov 2014 - Sep 2017
            </li>
            <li>
              <strong>Application Developer / Designer</strong> | Dual Logicom ·
              Jan 2014 - Nov 2014
            </li>
            <li>
              <strong>IT & Network Specialist</strong> | Voi & Noi · Nov 2012 -
              Jan 2013
            </li>
            <li>
              <strong>
                IT & Network Specialist - Web Designer & Developer
              </strong>{" "}
              | PC ENTER · Apr 2012 - Sep 2012
            </li>
            <li>
              <strong>IT Specialist</strong> | STARK Services S.A. · Jun 2009 -
              Aug 2011
            </li>
            <li>
              <strong>PC Support - IT Helpdesk (Internship)</strong> | Intrakat
              S.A. · Jan 2007 - Jul 2007
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
