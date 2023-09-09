import React from "react";
import StaffCard from "../../components/StaffCard/StaffCard";

import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <h2 className="about-title">Meet the team</h2>
        <StaffCard />
        <div>Looking to join the team? Well, don't.</div>
      </div>

      <p className="disabilities container">
        Bocca Bocca is committed to making our website's content accessible and
        user friendly to all of our customers, including our customers with
        disabilities. If you are having difficulty viewing or navigating the
        content on this website, or notice any content, feature, or
        functionality that you believe is not fully accessible to persons with
        disabilities, please contact our team by phone at 714.423.6830 or
        CONTACT US with “Accessibility Inquiry” in the subject line and provide
        a description of the specific feature you feel is not fully accessible
        or a suggestion for improvement. We take your feedback seriously and
        will consider it as we evaluate ways to accommodate all of our customers
        and our overall accessibility policies. Additionally, while we do not
        control such vendors, we strongly encourage vendors of third-party
        digital content to provide content that is accessible and user friendly.
      </p>
    </div>
  );
};

export default About;
