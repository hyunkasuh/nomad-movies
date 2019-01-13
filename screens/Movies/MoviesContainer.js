import React from "react";
import MoviesPresenter from "./MoviesPresenter";

export default class extends React.Component { //React.Component 대신에 Component
    state = {
        loading: true
    };
    render() {
        const { loading } = this.state;
        return <MoviesPresenter loading={loading} />;
    }
}