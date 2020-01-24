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
  loadMore: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: "1rem",
    letterSpacing: "2px",
    color: "#fff",
    background: "rgba(202, 204, 210, 0.3)",
    height: "3rem",
    width: "11rem",
    borderRadius: "6px",
    cursor: "pointer",
    boxShadow: "0 1.5rem 1rem -20px rgba(0,0,0,0.7)"
  },
  loader: {
    width: "100%",
    textAlign: "center",
    margin: "3rem",
    fontSize: "2rem",
    color: "white"
  }
};

class Headlines extends React.Component {
  state = {
    articles: []
  };
  componentDidMount() {
    const { categoryURL, category } = this.props;
    fetch(categoryURL({ pageSize: 6, category }))
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          articles: res.articles.filter(article => article.description),
          loading: this.props.loading
        });
      });
  }

  render() {
    const { classes, categoryTitle } = this.props;
    const { articles } = this.state;
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

export default withStyles(styles)(Headlines);
