import axios from "axios";

const BASE_URL="https://newsapi.org/v2";
const API_KEY="99c6d33fcce34a4b9f03ff911140607c";



export async function fetchAllNews(){
    try {
        const response = await axios.get(`${BASE_URL}/everything?q=fertilizers farming &apiKey=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}