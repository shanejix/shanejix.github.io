import React from "react";

import WrappedCard from "../../components/wrappedCard";
import "./index.less";

export default class Articles extends React.Component {
    render() {
        return (
            <div>
                <WrappedCard />
                <WrappedCard />
                <WrappedCard />
                <WrappedCard />
            </div>
        );
    }
}
