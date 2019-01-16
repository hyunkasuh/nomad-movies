import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "891a6048428abaa374fb2640915d7423",
        language: "en-US"
    }
});

export const movies = {
    getPopular: () => api.get("movie/popular"),
    getUpcoming: () => api.get("movie/upcoming"),
    getNowPlaying: () => api.get("movie/now_playing"),
    getMovies: (id) => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    searchMovies: (term) => api.get("search/movie", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};

export const tv = {
    getPopular: () => api.get("tv/popular"),
    getAiringThisWeek: () => api.get("tv/on_the_air"),
    getAiringToday: () => api.get("tv/airing_today"),
    getShow: (id) => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    searchTv: (term) => api.get("search/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};