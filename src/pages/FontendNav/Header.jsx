import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import style from "./Header.module.css";
import logo from "../../assets/avatar.jpg";

export default function Header() {
  return (
    <div className={style.header}>
      {/* logo */}
      <Link to="/">
        <img className={style.logo} src={logo} alt="logo" />
      </Link>
      {/* advise*/}
      <a href="https://github.com/shanejix/shanejix.github.io/issues/24">
        <Button type="danger" className={style.advise}>
          建议
        </Button>
      </a>
    </div>
  );
}
