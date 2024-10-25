const imgDiv = document.querySelector(".main__img");

const testImgCalls = async () => {
  try {
    const nasaApi = new NasaApi(NASA_API_KEY);
    const nasaApiInfo = await nasaApi.getImg();
    const img = nasaApiInfo.data.url;
    console.log(img);
    imgDiv.src = img;
  } catch (error) {
    console.log(error);
  }
};

testImgCalls();

const testNewsCalls = async () => {
  try {
    const newsApi = new NewsApi(NEWS_API_KEY);
    const newsDataInfo = await newsApi.getNews();
    const news = newsDataInfo.data.articles[0];
    const newsContent = `${news.title} : ${news.description}`;

    const newsContainer = document.querySelector(".main__content");
    newsContainer.innerText = newsContent;

    console.log(newsContent);
  } catch (error) {
    console.log(error);
  }
};

testNewsCalls();

const fetchBdImg = async (apiKey, dateValue) => {
  const bdNasaApi = new NasaApi(apiKey, dateValue);
  const bdImgInfo = await bdNasaApi.getBdImg();
  const bdImg = bdImgInfo.data.url;
  imgDiv.src = bdImg;

  console.log(bdImgInfo);
  console.log(bdImg);
};

const fetchBdNews = async (apiKey, dateValue) => {
  const bdNewsApi = new NewsApi(apiKey, dateValue);
  const bdNewsInfo = await bdNewsApi.getBdNews();
  const bdNews = bdNewsInfo.data.articles[0];
  const bdNewsFormat = `${bdNews.title} : ${bdNews.description}`;

  console.log(bdNewsFormat);

  const NewsContainer = document.querySelector(".main__content");
  NewsContainer.innerText = bdNewsFormat;
};

const formSubmitted = document.querySelector(".main__form");

const submitHandler = (event) => {
  event.preventDefault();
  const dateValue = event.target.date.value;
  console.log(dateValue);

  fetchBdImg(NASA_API_KEY, dateValue);
  fetchBdNews(NEWS_API_KEY, dateValue);
};

formSubmitted.addEventListener("submit", submitHandler);
