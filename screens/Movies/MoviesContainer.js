import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import { movies } from "../../api";

export default class extends React.Component { //React.Component 대신에 Component
    state = {
        loading: true,
        upcoming: null,
        popular: null,
        nowPlaying: null,
        error: null
    };

    async componentDidMount() {
        let upcoming, popular, nowPlaying, error;
        try {
            ({
                data: { results: upcoming }
            } = await movies.getUpcoming());
            ({
                data: { results: popular }
            } = await movies.getPopular());
            ({
                data: { results: nowPlaying }
            } = await movies.getNowPlaying());
        } catch (error) {
            console.log(error);
            error = "Can't get Movies.";
        } finally {
            this.setState({
                loading: false,
                error,
                upcoming,
                popular,
                nowPlaying
            });
        }
    }

    render() {
        const { loading, popular, upcoming, nowPlaying } = this.state;
        // console.log(this.state);
        return (
            <MoviesPresenter
                loading={loading}
                popular={popular}
                upcoming={upcoming}
                nowPlaying={nowPlaying}
            />
        );
    }
}