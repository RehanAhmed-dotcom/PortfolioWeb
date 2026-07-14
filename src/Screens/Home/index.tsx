const Home = () => {
  return (
    // <section className="homediv" id={"Home"}>
    //   <div>
    //     <h2>Rehan Ahmed</h2>
    //     <h3>Frontend developer</h3>
    //   </div>
    // </section>
    <section className="homediv" id="Home">
      <div className="homediv-overlay" />
      <div className="homediv-content">
        <span className="homediv-eyebrow">Hi, I'm</span>
        <h1>Rehan Ahmed</h1>
        <h2>Senior React Native Developer</h2>
        <p>
          I build production-grade mobile apps — ride-hailing, e-commerce,
          fintech, and sports — with React Native, TypeScript, and Firebase.
        </p>
        <div className="homediv-actions">
          <a href="./#Portfolio" className="btn btn-primary">
            View Work
          </a>
          {/* <a href="#Contact" className="btn btn-outline">
            Get In Touch
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
