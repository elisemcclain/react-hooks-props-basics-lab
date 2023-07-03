import React from "react";

function About(props) {
  const { bio } = props;

  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio ? props.bio.textContent : null}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>
        Links
        <a href="https://github.com/liza">https://github.com/liza</a>
        <a href="https://www.linkedin.com/in/liza/">
          https://www.linkedin.com/in/liza/
        </a>
      </h3>
    </div>
  );
}

export default About;
