import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiJqueryLogo } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiMysql } from "react-icons/di";

function About() {
  return (
    <section id="about" className="mt-5">
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
                    <div className="col-sm-6 d-flex justify-content-center align-items-center col-md-7">
                      <div className="">
                        <p className="font-weight-bold">Ufuk UYSAL</p>
                        <p className=" font-weight-bold">
                          Front End Web Developer
                        </p>
                        <p className=" font-weight-bold">
                          ufuk.uysl5@gmail.com
                        </p>
                        <p className=" font-weight-bold">+32 487 63 78 42</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div
                      id="skils"
                      className="d-flex flex-wrap justify-content-center align-items-center mt-3 mb-5"
                    >
                      <span>
                        <AiFillHtml5 id="icons" size="3rem" />
                        <p>HTML5</p>
                      </span>
                      <span>
                        <DiCss3 id="icons" size="3rem" />
                        <p>CSS3</p>
                      </span>
                      <span>
                        <DiBootstrap id="icons" size="3rem" />
                        <p>BS-4</p>
                      </span>
                      <span>
                        <DiJqueryLogo id="icons" size="3rem" />
                        <p>Jquery</p>
                      </span>
                    </div>
                    <div
                      id="skils"
                      className="d-flex flex-wrap justify-content-center align-items-center mb-5"
                    >
                      <span>
                        <DiJavascript1 id="icons" size="3rem" />
                        <p>Jscript</p>
                      </span>
                      <span>
                        <DiReact id="icons" size="3rem" />
                        <p>ReactJs</p>
                      </span>
                      <span>
                        <DiNodejsSmall id="icons" size="3rem" />
                        <p>NodeJs</p>
                      </span>
                      <span>
                        <DiMysql id="icons" size="3rem" />
                        <p>Mysql</p>
                      </span>
                    </div>
                    <div
                      id="skils"
                      className="d-flex flex-wrap justify-content-center align-items-center mb-5"
                    >
                      {" "}
                      <a
                        id="profile-link"
                        href="https://u-uysal.github.io/Resume/index.html"
                        target="_blank"
                      >
                        To see more and my resume ,click here
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="pt-4 pt-md-0">
                    <div className="">
                      <h5 className="font-weight-bold text-center">About me</h5>
                      <hr></hr>
                    </div>
                    <p className="font-weight-bold">
                      Hi I am Ufuk. I’m a Front End web developer, working
                      mainly on user-friendly apps. I have an Electronic
                      Engineering background from a military academy. I recently
                      shifted my focus entirely to Computer Engineering. I love
                      algorithms, programming, and graphic design. I have been
                      following courses and training on several subjects
                      including Javascript, web development.
                    </p>
                    <p className=" font-weight-bold">
                      Another reason why I like this field is the impact you can
                      make with the created solutions on everyone's everyday
                      live and the difference that a smooth team collaboration
                      can make.
                    </p>
                    <p className=" font-weight-bold">
                      I have a unique background: in addition to technical
                      knowledge, I was educated and then worked as an officer in
                      a military environment. I proved to be a skilled team
                      organizer and manager. Programming is almost always
                      teamwork and I know all about how to behave in that
                      environment.
                    </p>

                    <p className=" font-weight-bold">
                      Currently, I am working as a freelancer , making videos about Front End  for my youtube channel  and developing
                      smaller-scale projects. However, I am looking forward to
                      moving into larger-scale and bigger-team projects.I can
                      start my career with either BIST or IBO contract. I would
                      be delighted if you review my resume and consider me for
                      an interview.
                    </p>
                    <p className=" font-weight-bold">
                      I kindly invite you to surf to one of my 85+ YouTube tutorials.
                      <a target="_blank" href="https://www.youtube.com/channel/UCm1tKKCDpcynlZYu-wVO36w">  Click here!</a>
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
