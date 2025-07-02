const Skills = () => {
  return (
    <section className="skilldiv" id={"Skills"}>
      <div className="headingSkillDiv">
        <h2 className="headingAbout">Skills</h2>
        <p className="dummyAbout">
          List of skills I have acquired over the years.
        </p>
        <div className="listView">
          <div>
            <ul>
              <li>
                <p>React Native</p>
              </li>
              <li>
                <p>React.js</p>
              </li>
              <li>
                <p>Video Calling ( Agora,twilio and ZegoCloud)</p>
              </li>
              <li>
                <p>Global State Management(redux toolkit)</p>
              </li>
              <li>
                <p>AWS services(s3 bucket)</p>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <p>
                  Uploading and handling store builds(apple store and google
                  play store)
                </p>
              </li>
              <li>
                <p>Payment (Stripe, Paypal and apple pay,)</p>
              </li>
              <li>
                <p>Firebase</p>
              </li>
              <li>
                <p>In app payment</p>
              </li>
              <li>
                <p>
                  AI Prompt Engineering(Custom ChatGPT Answering for specific
                  outputs)
                </p>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <p>Social Logins(Facebook, Google and Apple)</p>
              </li>
              <li>
                <p>Notifications handling</p>
              </li>
              <li>
                <p>Type script</p>
              </li>
              <li>
                <p>Java script</p>
              </li>
              <li>
                <p>RESTful API Integration</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
