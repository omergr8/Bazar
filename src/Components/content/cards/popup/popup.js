import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import "./popup.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 340,

  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [dense, setDense] = React.useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title="FinancialForce professional Services Automation (PSA) - FALL 2020"
        subheader="App by FinanacialForce"
      />
      <Divider />
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <h4 className="fontSize" style={{marginLeft:'20px'}}>FEATURES</h4>
          <List dense={dense}>
            {generate(
              <ListItem>
                <ListItemIcon>
                  <Avatar className={classes.small}>a</Avatar>
                </ListItemIcon>
                <ListItemText
                  primary="Single item"
                  className="lineText "
                  secondary={secondary ? "Lightning Ready" : null}
                />
              </ListItem>
            )}
          </List>
        </Grid>
        <Grid item xs={6}>
          <h4 className="fontSize">RATING</h4>

          <Rating
            style={{ color: "black" }}
            name="read-only"
            size="small"
            value={4}
            readOnly
          />

          <span className="itemFontSize">(1,120)</span>

          <h4 className="fontSize">Latest Release</h4>
          <span className="itemFontSize">8/17/2019</span>
        </Grid>
      </Grid>
      <Divider />
      <h4 className="fontSize"  style={{marginLeft:'20px'}}>CATEGORIES</h4>
      <span className="itemFontSize" style={{ color: "blue",marginLeft:'20px' }}>
        Project Management
      </span>
      <Divider />
      <CardContent>
        <Typography
          variant="body2"
          className="itemFontSize"
          color="textPrimary"
          component="p"
        >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="primary">
          <FavoriteIcon /> Save
        </Button>

        <Button
          style={{ marginLeft: "160px" }}
          variant="contained"
          color="primary"
        >
          More
        </Button>
      </CardActions>
    </Card>
  );
}
