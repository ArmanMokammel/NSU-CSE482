import React from "react";

const AboutSection = () => {
  return (
    <section
      style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}
    >
      <h1>About Us</h1>
      <p>
        Welcome to our About page. This section introduces our company, mission,
        and values.
      </p>
      <div style={{ marginTop: "30px" }}>
        <h2>Our Mission</h2>
        <p>
          We are dedicated to providing excellent services and solutions to our
          clients. Our team is committed to innovation, quality, and customer
          satisfaction.
        </p>
      </div>
      <div style={{ marginTop: "30px" }}>
        <h2>Our Team</h2>
        <p>
          Our diverse team brings expertise across various domains, working
          together to deliver exceptional results for every project.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
