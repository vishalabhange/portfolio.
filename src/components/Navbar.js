import React from "react";
import Profile from "C:/Users/Vishal/Desktop/portfolio/src/images/vishal.jpg";
export default function Navbar() {
  return (
    <div>
      <nav id="navbar" className="navbar">
        <a href="/navbar"/>
      </nav>

      <div className="container">
        <div className="menu">
          <a href="#welcome-section" className="menu-icon fa-solid fa-house"></a>
          <a href="#about" className="menu-icon fa-solid fa-user"></a>
          <a href="#projects" className="menu-icon fa-solid fa-code"></a>
          <a href="#experience" className="menu-icon fa-solid fa-briefcase"></a>
          <a href="#contact" className="menu-icon fa-solid fa-envelope"></a>
        </div>

        <div className="portfolio">
          <section className="header">
            <img className="header-img" src={Profile} alt="" />
            <h1>Abhange Vishal</h1>
            <h2>Frontend Developer</h2>
            <div className="socials">
              <a
                href="#"
                target="_blank"
                className="fa-brands fa-linkedin-in"
                id="profile-link"
              ></a>
              <a
                href="https://github.com/vishalabhange"
                target="_blank"
                className="fa-brands fa-github"
              ></a>
              <a
                href="https://linktr.ee/abhangevishal"
                target="_blank"
                className="fa-brands fa-codepen"
              ></a>
            </div>
            <a href="" className="cta">
              DownIoad CV
            </a>
          </section>

          <div className="content">
            <section className="content-card home" id="welcome-section">
              <h1>Hello, I am vishal</h1>
            </section>

            <section className="content-card about" id="about">
              <h1>About me</h1>
              <div className="about-item about-me">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                  non dolore facere reiciendis iusto nemo tempore laboriosam
                  laborum fugit dolorum totam incidunt tempora laudantium
                  obcaecati natus sit, aspernatur consectetur! Voluptates?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  consectetur quos fugiat fugit! Officiis, temporibus.
                </p>
              </div>
              <div className="col-2">
                <div className="about-item skills">
                  <h1>Skills</h1>
                  <span className="skill">HTML</span>
                  <span className="skill">CSS</span>
                  <span className="skill">JavaScript</span>
                  <span className="skill">Node.js</span>
                  <span className="skill">React</span>
                  <span className="skill">SQL</span>
                  <span className="skill">Git</span>
                  <span className="skill">API</span>
                  <span className="skill">Unix/Linux</span>
                  <span className="skill">Jira</span>
                  <span className="skill">Confluence</span>
                  <span className="skill">Figma</span>
                </div>
                <br/>
                <div className="about-item languages">
                  <h1>Languages</h1>
                  <div className="language">
                    <p>polish</p>
                    <span className="bar">
                      <span className="polish"></span>
                    </span>
                  </div>
                  <div className="language">
                    <p>english</p>
                    <span className="bar">
                      <span className="english"></span>
                    </span>
                  </div>
                  <div className="language">
                    <p>french</p>
                    <span className="bar">
                      <span className="french"></span>
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="content-card projects" id="projects">
              <h1>Projects</h1>
              <div className="col-2 project-list">
                <div className="project-tile">
                  <img
                    src="https://shots.codepen.io/nietoperq/pen/BaPJqGW-512.webp?version=1674304822"
                    alt=""
                  />
                  <div className="overlay">
                    <div className="project-description">
                      <h3>Project 1</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nisi aperiam voluptate accusamus velit omnis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="project-tile">
                  <img
                    src="https://shots.codepen.io/nietoperq/pen/GRBOjyV-512.webp?version=1674084446"
                    alt=""
                  />
                  <div className="overlay">
                    <div className="project-description">
                      <h3>Project 2</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nisi aperiam voluptate accusamus velit omnis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="project-tile">
                  <img
                    src="https://shots.codepen.io/nietoperq/pen/dyjWxgX-512.webp?version=1673554073"
                    alt=""
                  />
                  <div className="overlay">
                    <div className="project-description">
                      <h3>Project 3</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nisi aperiam voluptate accusamus velit omnis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="project-tile">
                  <img
                    src="https://shots.codepen.io/nietoperq/pen/vYagdwo-512.webp?version=1673549480"
                    alt=""
                  />
                  <div className="overlay">
                    <div className="project-description">
                      <h3>Project 4</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nisi aperiam voluptate accusamus velit omnis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="https://github.com/nietoperq">see more...</a>
            </section>

            <section className="content-card experience" id="experience">
              <h1>Experience</h1>
              <div className="timeline">
                <div className="timeline-items">
                  <div className="timeline-item">
                    <div className="timeline-date">2022 - now</div>
                    <div className="timeline-content">
                      <h3>timeline item 1</h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ab iusto accusantium nostrum eligendi debitis
                        quisquam. Corporis at voluptatem culpa officia.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">2015 - 2022</div>
                    <div className="timeline-content">
                      <h3>timeline item 2</h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ab iusto accusantium nostrum eligendi debitis
                        quisquam. Corporis at voluptatem culpa officia.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">2014 - 2015</div>
                    <div className="timeline-content">
                      <h3>timeline item 3</h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ab iusto accusantium nostrum eligendi debitis
                        quisquam. Corporis at voluptatem culpa officia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
