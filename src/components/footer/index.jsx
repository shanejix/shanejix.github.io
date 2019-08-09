import React from "react";
import { Link } from "react-router-dom";

import "./index.less";

export default class Footer extends React.Component {
    componentDidMount() {
        console.log("Footer componentDidMount()");
    }

    render() {
        return (
            <footer className="footer">
                design by <a href="https://github.com/shanejix">shanejix</a>
            </footer>
        );
    }
}
