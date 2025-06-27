import React from "react";
import pic from "../../assets/Pic.jpg";
import { FaAngleRight } from "react-icons/fa6";
const About = () => {
  return (
    <section className="aboutdiv" id={"About"}>
      <div className="headingAboutDiv">
        <h2 className="headingAbout">About</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="aboutContent">
          <div className="imagediv">
            <img src={pic} alt="wrong path" />
          </div>
          <div className="content">
            <h2>React native & React developer</h2>
            <p>Front end developer working on app (ios & android) and web.</p>
            <div className="DetailsContainer">
              <div>
                <div className="oneComp">
                  <FaAngleRight color="#149ddd" style={{ marginTop: 2 }} />
                  <div className="rowDetails">
                    <h3>Birthday: </h3>
                    <p>20 July 1997</p>
                  </div>
                </div>
                <div className="oneComp">
                  <FaAngleRight color="#149ddd" style={{ marginTop: 2 }} />
                  <div className="rowDetails">
                    <h3>Website: </h3>
                    <a href="https://github.com/RehanAhmed-dotcom/PortfolioWeb">
                      https://github.com/RehanAhmed-dotcom/PortfolioWeb
                    </a>
                  </div>
                </div>
                <div className="oneComp">
                  <FaAngleRight color="#149ddd" style={{ marginTop: 2 }} />
                  <div className="rowDetails">
                    <h3>Phone no: </h3>
                    <p>+923495010406</p>
                  </div>
                </div>
                <div className="oneComp">
                  <FaAngleRight color="#149ddd" style={{ marginTop: 2 }} />
                  <div className="rowDetails">
                    <h3>City: </h3>
                    <p>Rawalpindi Pakistan</p>
                  </div>
                </div>
              </div>
              {/* <h2>world</h2> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
