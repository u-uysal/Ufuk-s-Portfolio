function Home() {
  const styling = {
    backgroundImage: `url('./bg-image')`,
  };
  return (
    <div id="home" className="intro route bg-image" style={{ styling }}>
      <div className="overlay-itro"></div>
      <div className="intro-content display-table">
        <div className="table-cell">
          <div id="welcome-section" className="container h-100">
            <h1 className="intro-title mb-4">I am Ufuk UYSAL</h1>
            <p className="intro-subtitle">
              <span className="text-slider-items">Front End Web Developer</span>
              <strong className="text-slider"></strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
