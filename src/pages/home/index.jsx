import React from "react";
import "./index.less";
import { Link } from "react-router-dom";

import logo from "../../assets/img/user.jfif";

export default class Home extends React.Component {
  
    render() {
        return (
            <section className="home">
                <canvas id="canvas" />
                <div className="content">
                    <div className="home-header">
                        <Link className="link" to={`/articles`}>
                            <img
                                className="home-logo"
                                src={logo}
                                alt="shenajix logo"
                            />
                        </Link>
                    </div>
                    <div className="home-body">
                        <div className="list">
                            <Link className="link" to={`/articles`}>
                                Articles
                            </Link>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link"
                                href={`https://github.com/shanejix`}
                            >
                                GitHub
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link"
                                href={`https://dev.to/`}
                            >
                                DEV
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link"
                                href={`https://medium.com/`}
                            >
                                Medium
                            </a>
                        </div>
                        <div className="introduce">
                            {" "}
                            时光正好，未来可期，加油 ！{" "}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
