import React from "react";

import style from "./Contact.module.css";
export default function Contact() {
  return (
    <div className={style.contact}>
      <h2>Contact</h2>
      <p>
        I’m a Front-end developer with more than one years working experience
        and plan to be a Full-stack developer . If you have opportunity about
        JavaScript or React, please get in touch me by{" "}
        <a href="mailto:shanejix@vip.163.com">E-mail</a> or find me on other platforms
      </p>
    </div>
  );
}
