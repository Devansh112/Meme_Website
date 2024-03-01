import axiosRetry from "axios-retry";

export const DEFAULT_RETRY_STRATEGY = {
  retries: 1,
  retryDelay: (retryCount) => {
    console.log("Retrying request- Attempt:", retryCount);
    return axiosRetry.exponentialDelay;
  },
  retryCondition: (error) => {
    return [500, 501, 503, 504].includes(error.response.status);
  },
};

export const MEME_ENDPOINT_URL = "https://meme-api.com/gimme/wholesomememes";

//1- > Changing sub reddits   2-> add Scrollable Memes (10,20,50) 