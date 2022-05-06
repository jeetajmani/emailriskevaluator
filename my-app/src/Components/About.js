import React, { useRef, useEffect } from "react";
const About = (props) => {
  const { setAboutRef } = props;
  const ref = useRef(null);
  useEffect(() => {
    setAboutRef(ref);
  });
  return (
    <section className="About">
      <h4 ref={ref}>ABOUT</h4>
      <p>
        Our plan is to provide peace of mind to the community by allowing them
        to protect their privacy by checking suspicious activities using our web
        application.{" "}
      </p>
    </section>
  );
};

export default About;
