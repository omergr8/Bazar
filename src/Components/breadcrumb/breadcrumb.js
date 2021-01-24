import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CustomSeparator() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          style={{
            fontSize: "12.5px",
            fontWeight: "600",
            textDecorationLine: "underline",
            textDecorationStyle: "dotted",
            color: "blue",
          }}
          href="/"
          onClick={handleClick}
        >
          Bazaar Home
        </Link>

        <Typography color="textPrimary" style={{ fontWeight: "600" }}>
          Formularies
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
