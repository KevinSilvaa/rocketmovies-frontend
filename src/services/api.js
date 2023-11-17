import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketmovies-backend-w3ju.onrender.com"
});
