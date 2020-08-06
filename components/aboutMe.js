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
                      <h5 className="title-left text-info">About me</h5>
                    </div>
                    <p className="text-primary font-weight-light">
                      Hi I am Ufuk. I’m a Front End web developer, working
                      mainly on user-friendly apps. I have an Electronic
                      Engineering background from a military academy. I recently
                      shifted my focus entirely to Computer Engineering. I love
                      algorithms, programming, and graphic design. I have been
                      following courses and training on several subjects
                      including Javascript, web development.
                    </p>
                    <p className="text-primary font-weight-light">
                      Another reason why I like this field is the impact you can
                      make with the created solutions on everyone's everyday
                      live and the difference that a smooth team collaboration
                      can make.
                    </p>
                    <p className="text-primary font-weight-light">
                      I have a unique background: in addition to technical
                      knowledge, I was educated and then worked as an officer in
                      a military environment. I proved to be a skilled team
                      organizer and manager. Programming is almost always
                      teamwork and I know all about how to behave in that
                      environment. etc.
                    </p>
                    <p className="text-primary font-weight-light">
                      Currently, I am working as a freelancer and developing
                      smaller-scale projects. However, I am looking forward to
                      moving into larger-scale and bigger-team projects.I can
                      start my career with either BIST or IBO contract. I would
                      be delighted if you review my resume and consider me for
                      an interview.
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
