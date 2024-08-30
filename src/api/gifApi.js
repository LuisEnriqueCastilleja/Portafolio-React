import axios from "axios";

export const gifApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/search?api_key=FR2wcO4G3qY7CPKr0Ub70cNcgBxsX7Xk&q='
});