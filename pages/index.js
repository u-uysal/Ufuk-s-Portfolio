const { default: Navbar } = require("../components/navbar");
import Head from "next/head";

import About from "../components/aboutMe";
import Footer from "../components/footer";
import ProjectsData from "../components/projectsData";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Ufuk UYSAL</title>
        <meta property="og:title" content="My page title" key="title" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>

      <Navbar></Navbar>

      <About></About>
      <h3 className="text-center font-weight-bold mb-5 ">MY PROJECTS</h3>
      <ProjectsData></ProjectsData>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
