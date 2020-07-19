function About() {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img
                          src="/ufuk_uysal.jpg"
                          className="img-fluid rounded b-shadow-a"
                          alt="My photo"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p>
                          <span className="title-s">
                            Name:
                            <span className="text-primary font-weight-light">
                              Ufuk UYSAL
                            </span>
                          </span>
                        </p>
                        <p>
                          <span className="title-s">
                            Profile:
                            <span className="text-primary font-weight-light">
                              Front End Web Developer
                            </span>
                          </span>
                        </p>
                        <p>
                          <span className="title-s">
                            Email:
                            <span className="text-primary font-weight-light">
                              ufuk.uysl5@gmail.com
                            </span>
                          </span>
                        </p>
                        <p>
                          <span className="title-s">
                            Phone:
                            <span className="text-primary font-weight-light">
                              +32 487 63 78 42
                            </span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>HTML5</span> <span className="pull-right">100%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>CSS3,Tailwind CSS,Bootstrap 4</span>
                    <span className="pull-right">95%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>Vanilla JS,ES6</span>
                    <span className="pull-right">90%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>ReactjS,Redux</span>
                    <span className="pull-right">80%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <button>
                      <a
                        id="profile-link"
                        href="https://u-uysal.github.io/Resume/"
                        target="_blank"
                      >
                        To see more and my resume ,click here
                      </a>
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About me</h5>
                    </div>
                    <p className="text-primary font-weight-light">
                      I am a front end web developer who lives in the beautiful
                      city of Belgium, Hasselt. I'm 27 years old. Married and no
                      kids. I am a lifelong learner. I really enjoy solving
                      problems as well as making things pretty and easy to use.
                      I can't stop learning new things; the more, the better. I
                      also love playing table tennis and volleyball,
                    </p>
                    <p className="text-primary font-weight-light">
                      Also ; <br />
                      • Military academy education with a minor in Electrical
                      Engineering. <br />
                      • Fully focused on IT since 5/2019. <br />
                      • 4 years of experience in management and service, in
                      military and civilian environments. <br />• High stamina
                      to work under pressing deadlines and schedules.
                    </p>
                    <p className="text-primary font-weight-light">
                      For the front-end I usually work with Javascript, either
                      standalone or including popular frameworks like ReactJS I
                      also make the web pretty by using Sass, CSS3 and, whenever
                      needed, any of their friends: Bootstrap, Tailwind Css,
                      etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
