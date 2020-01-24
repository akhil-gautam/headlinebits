import React, { useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";

import { countries } from "../../country";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  toolbarBG: {
    background: "#172c34",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      padding: "1rem"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "block",
    fontSize: "2rem",
    fontWeight: "bold",
    fontFamily: "monospace",
    textTransform: "uppercase",
    textDecoration: "underline",
    marginBottom: "1rem"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "flex"
  },
  country: {
    width: "auto",
    fontWeight: 900
  },
  selectOptions: {
    color: "white",
    marginTop: "10px"
  }
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [country, setCountry] = React.useState("");

  useEffect(() => {
    const country = window.localStorage.getItem("user-country");
    country ? setCountry(country) : setCountry("US");
  }, []);

  const handleSelectChange = event => {
    setCountry(event.target.value);
    window.localStorage.setItem("user-country", event.target.value);
    window.location.reload();
  };

  const handleSelectClose = () => {
    setOpen(false);
  };

  const handleSelectOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.toolbarBG}>
          <Typography className={classes.title} variant="h6" noWrap>
            HeadlineBits
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={e => props.searchNews(e.target.value)}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <FormControl className={classes.country}>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleSelectClose}
                onOpen={handleSelectOpen}
                value={country}
                onChange={handleSelectChange}
                className={classes.selectOptions}
              >
                {countries.map(country => (
                  <MenuItem value={country.code} key={country.code}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
