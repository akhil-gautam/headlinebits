import React from "react";
import _ from "lodash";

import Appbar from "../src/components/shared/appbar";
import TopHeadlines from "../src/components/TopHeadlines";
import SearchResults from "../src/components/shared/SearchResults";
import { queryURL } from "./Api";
import * as OfflineIMG from "./offline.png";

const Offline = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "-webkit-fill-available",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff"
      }}
    >
      <img src={OfflineIMG} alt="Please check your Internet Connectivity" />
      <p
        style={{
          fontSize: "1rem",
          textTransform: "uppercase",
          fontWeight: "900",
          textAlign: "center"
        }}
      >
        Please check your Internet Connectivity.
      </p>
    </div>
  );
};

const App = () => {
  const [searchedArticles, setSearchedArticles] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const searchNews = _.debounce(query => {
    setSearchedArticles([]);
    setQuery(query);
    query.length > 0 &&
      fetch(queryURL({ query: query }))
        .then(res => {
          return res.json();
        })
        .then(res => {
          setSearchedArticles(
            res.articles.filter(article => article.description)
          );
        });
  }, 1000);

  return (
    <div>
      {navigator.onLine ? (
        <>
          <Appbar searchNews={searchNews} />
          {searchedArticles.length > 0 ? (
            <SearchResults
              articles={searchedArticles}
              categoryTitle={`Results for ${query}`}
            />
          ) : (
            <TopHeadlines />
          )}
        </>
      ) : (
        <Offline />
      )}
    </div>
  );
};

export default App;
