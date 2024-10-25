const NASA_API_KEY = "KNiMEmaGrewHL3fMmOJ2Dg7GQ9Jw4SWmHEeWpf0y";
const API_BASE_URL = "https://api.nasa.gov/planetary/apod?api_key=";
const NEWS_API_KEY = "b1a924fbc0c34ef6bd7e94f89843876d";
const COUNTRY_NEWS_API_URL =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=";

class NasaApi {
  constructor(apiKey, date) {
    this.apiKey = apiKey;
    this.baseURL = "https://api.nasa.gov/planetary/apod?api_key=";
    this.date = date;
  }

  async getImg() {
    const response = await axios.get(`${this.baseURL}${this.apiKey}`);
    // console.log(response);
    return response;
  }

  async getBdImg(apiKey, date) {
    const response = await axios.get(
      `${this.baseURL}${this.apiKey}&date=${this.date}`
    );
    console.log(`${this.baseURL}${this.apiKey}&date=${this.date}`);
    return response;
  }
}

class NewsApi {
  constructor(apiKey, date) {
    this.apiKey = apiKey;
    this.baseURL = "https://newsapi.org/v2/everything?q=London&from=";
    this.date = date;
  }

  async getNews() {
    try {
      const response = await axios.get(
        `${this.baseURL}2024-10-23&sortBy=popularity&apiKey=${this.apiKey}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getBdNews() {
    try {
      const response = await axios.get(
        `${this.baseURL}${this.date}&sortBy=popularity&apiKey=${this.apiKey}`
      );
      console.log(
        `${this.baseURL}${this.date}&sortBy=popularity&apiKey=${this.apiKey}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
