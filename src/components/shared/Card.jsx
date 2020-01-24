import React from "react";
import { withStyles } from "@material-ui/core/styles";
import * as NoImageBG from "../../../src/undraw_towing.png";

const styles = {
  card: {
    height: "26rem",
    width: "25rem",
    background: "#31373c",
    boxShadow: "0 0 2rem 0 rgb(35, 40, 43)",
    borderRadius: "0.4rem",
    margin: "2rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer"
  },
  coverImg: {
    width: "100%",
    height: "12rem",
    objectFit: "cover",
    borderRadius: "0.4rem 0.4rem 1rem 1rem",
    zIndex: "2",
    boxShadow: "0 0.1rem 0.5rem 0 rgba(0,0,0,0.4)",
    backgroundImage: `url(${NoImageBG})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  title: {
    top: "-15px",
    color: "#f2f2f2",
    height: "auto",
    zIndex: "1",
    position: "relative",
    fontSize: "1.2rem",
    background: "#31373c",
    fontFamily: "sans-serif",
    fontWeight: "700",
    borderRadius: "0 0 0.8rem 0.8rem",
    padding: "1.3rem 0.6rem 0.6rem 0.6rem",
    maxHeight: "9rem",
    minHeight: "5rem",
    boxShadow: "0 0 2rem 0 rgb(35, 40, 43)"
  },
  description: {
    color: "#fafafa",
    letterSpacing: "2px",
    padding: "0 0.6rem",
    height: "7rem"
  },
  actionButtons: {
    height: "3rem",
    background: "#7171ad",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "inherit",
    fontWeight: 600,
    color: "#fff",
    fontSize: "0.9rem"
  },
  buttons: {
    background: "linear-gradient(to right, #0a212d, #144158)",
    borderRadius: "4px",
    minWidth: "8rem",
    height: "2rem",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    fontWeight: "900",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  }
};

const Card = props => {
  const {
    classes,
    article: { urlToImage, title, description, url }
  } = props;
  let descriptionToShow;
  descriptionToShow =
    description.length > 200
      ? description.substring(0, 180) + "..."
      : description;

  const openOriginal = url => {
    window.open(url);
  };

  return (
    <div
      className={classes.card}
      onClick={() => openOriginal(url)}
      title="Click here to Read more"
    >
      <img src={urlToImage} alt="" className={classes.coverImg} />
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{descriptionToShow}</div>
    </div>
  );
};

export default withStyles(styles)(Card);
