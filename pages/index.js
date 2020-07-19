const { default: Navbar } = require("../components/navbar");
import Head from "next/head";
import Home from "../components/home";
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
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>

      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <h3 className="text-center font-weight-bold mb-5 text-primary">
        MY PROJECTS
      </h3>
      <ProjectsData></ProjectsData>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
