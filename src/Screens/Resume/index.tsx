import React from "react";

const Resume = () => {
  return (
    <section className="skilldiv" id={"Resume"}>
      <div className="ResumelDiv">
        <h2 className="headingAbout">Resume</h2>
        <p className="dummyAbout">
          Information about education and work experience.
        </p>
        <div className="Educationdiv">
          <h2>Education</h2>
          <h4>Bachelor of Science in Information Technology</h4>
          <p>2016 - 2021</p>
          <p>Barani Institute of Information Technology </p>
          <p>
            A comprehensive undergraduate degree focused on software
            development, databases, networking, web technologies, and
            information systems. Emphasized both theoretical knowledge and
            practical skills to solve real-world IT problems and support
            business technology needs.
          </p>
        </div>
        <div className="Experiencediv">
          <h2>Professional Experience</h2>
          <h4>Senior React native developer</h4>
          <p>2021 - present</p>
          <p>Intechsol</p>
          <p>
            App Developer with 4 years of experience in designing, developing,
            and deploying mobile applications for Android and iOS platforms.
            Skilled in React Native, UI/UX design, API integration, and
            performance optimization. Proven ability to deliver user-friendly
            and scalable apps from concept to release.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
