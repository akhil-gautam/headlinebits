import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "./Card";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "0 3%"
  },
  header: {
    margin: "1.5rem 0 0 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "900",
    textTransform: "uppercase",
    fontSize: "1.3rem",
    letterSpacing: "2px",
    color: "#fff"
  },
  loader: {
    width: "100%",
    textAlign: "center",
    margin: "3rem",
    fontSize: "2rem",
    color: "white"
  }
};

class SearchResults extends React.Component {
  render() {
    const { classes, categoryTitle, articles } = this.props;
    return (
      <>
        <div className={classes.header}>{categoryTitle}</div>
        <div className={classes.container}>
          {articles.length > 0 ? (
            articles.map((article, index) => {
              return <Card article={article} key={index} />;
            })
          ) : (
            <div className={classes.loader}>Loading...</div>
          )}
        </div>
      </>
    );
  }
}

export default withStyles(styles)(SearchResults);
