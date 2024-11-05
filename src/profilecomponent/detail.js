import React from 'react';
import "./detail.css"
import Card from './card';
const DetailsPage = () => {
  return (
    <div>

      <main>
        <div className="content">
          <div className="tiles">
            <div style={{ "--r": "45deg" }} className="tile"></div>
            {/* <div style={{ "--r": "190deg" }} className="tile"></div> */}
            <div style={{ "--r": "275deg" }} className="tile"></div>
            <div style={{ "--r": "190deg" }} className="tile"></div>
            <div style={{ "--r": "45deg" }} className="tile"></div>
          </div>
          <section className="section--one">
            <h2>Technical Skills</h2>
            <article>
              <div className="title-wrap">
                <h2>Programming Languages:</h2>
              </div>

              <div className="content-wrap">
                <p>
                  <ul>
                    <li><b>JavaScript (ES5/ES6):</b> Skilled in developing dynamic and interactive web applications.</li>
                    <li><b>Golang:</b> Experienced in building back-end services and microservices architecture.</li>
                    <li><b>Node.js:</b> Proficient in building scalable server-side applications.</li>
                  </ul></p>
              </div>

            </article>
            <article>
              <div className="title-wrap">
                <h2>Frameworks & Libraries:</h2>
              </div>

              <div className="content-wrap">
                <p><ul>
                  <li><b>React.js:</b> Expertise in developing user interfaces and single-page applications (SPA).</li>
                  <li><b>Gqlgen:</b> Experience with generating GraphQL APIs using Golang.</li>
                  <li><b>Gorm:</b> Proficient in working with Golang's ORM for database management.</li>
                </ul>
                </p>
              </div>
            </article>
            <article>
              <div className="title-wrap">
                <h2>Databases:</h2>
              </div>

              <div className="content-wrap">
                <p> <ul>
                  <li><b>MongoDB:</b> Skilled in managing NoSQL databases for scalable applications.</li>
                </ul>
                </p>
              </div>
            </article>
            <article>
              <div className="title-wrap">
                <h2>DevOps & Cloud:</h2>
              </div>

              <div className="content-wrap">
                <p><ul>
                  <li><b>AWS EC2:</b> Experience in deploying and managing cloud infrastructure.</li>
                  <li><b>Docker:</b> Proficient in containerization for microservices deployment.</li>
                  <li><b>Microservices:</b> Skilled in designing and deploying microservice-based architectures.</li>
                  <li><b>Git:</b> Expertise in using Git for version control and collaboration in software development.</li>
                  <li><b>Ubuntu:</b> Skilled in using Ubuntu for development and server management.</li>
                  <li><b>Windows:</b> Familiar with Windows environment for development.</li>
                </ul></p>
              </div>
            </article>


          </section>
        </div>
        <section className="section--two"></section>
        <section className="section--three"></section>
        <section className="section--four"></section>
        {/* <section className="section--five centered">
        </section> */}
      </main>

    </div>
  );
};

export default DetailsPage;
