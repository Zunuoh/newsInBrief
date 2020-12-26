import axios from 'axios';
import {useEffect} from 'react-native';
// export const apiKey = '6737ee12d7e84595a1a27282d5c6f9c9'

// // export const newsUrl = "https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=" + apiKey

// export const axios = Axios.create({baseURL :"https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=" + apiKey,
// })


export default axios.create({
    baseURL: "https://newsapi.org/v2/"
})



