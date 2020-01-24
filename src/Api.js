const country = window.localStorage.getItem("user-country") || "US";

export const API_URL = "https://newsapi.org/v2";
export const API_KEY = "your API KEY";

export const headlinesURL = ({
  pageSize = 10,
  sortBy = "publishedAt",
  category = "general"
}) => {
  return `${API_URL}/top-headlines?country=${country}&apiKey=${API_KEY}&pageSize=${pageSize}&sortBy=${sortBy}&category=${category}`;
};

export const queryURL = ({
  pageSize = 20,
  sortBy = "popularity",
  query = ""
}) => {
  return `${API_URL}/everything?q=${query}&apiKey=${API_KEY}&pageSize=${pageSize}&sortBy=${sortBy}`;
};
