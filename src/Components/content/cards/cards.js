import React, { useRef } from "react";
import "./cards.css";
import { withStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Rating from "@material-ui/lab/Rating";
import Page from "../inputPage/page/page";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Card from "./popup/popup";

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);
const Cards = () => {
  const refs = useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  function validateChildren() {
    console.log(refs.current);
    refs.current.validate();
  }

  const [cardData, setCardData] = React.useState([
    {
      key: 0,
      heading: "Full Formulary",
      by: "FutureLLC",
      stars: 4,
      rating: 1201,
      description:
        "Sed ut perspiciatis  unde omnis iste natus error sit voluptatem unde omnis iste natus error sit voluptatem unde omnis iste natus error sit voluptatem accusantieum fugiat quo voluptas nulla pariatur?",
    },
    {
      key: 1,
      heading: "Full Formulary",
      by: "FutureLLC",
      stars: 4,
      rating: 1201,
      description:
        "Sed ut perspiciatis  unde omnis iste natus error sit voluptatem unde omnis iste natus error sit voluptatem unde omnis iste natus error sit voluptatem accusantieum fugiat quo voluptas nulla pariatur?",
    },
    {
      key: 2,
      heading: "Full Formulary",
      by: "FutureLLC",
      stars: 4,
      rating: 1201,
      description: "Lorem ipsum hshhhd dsvfds vfdvdffdvffvd",
    },
  ]);

  const [chipData, setChipData] = React.useState([
    { key: 4, label: "Full Formulary", color: "primary" },
    { key: 5, label: "Tierr" },
    { key: 6, label: "Full Administration", color: "secondary" },
  ]);
  const [value, setValue] = React.useState(2);

  return (
    <div>
      {cardData.map((data) => {
        return (
          <div className="cardBorder" key={data.key}>
            <Grid container alignItems="center" spacing={3}>
              <Grid item xs={2}>
                <div className="logo">
                  <img src="https://res.cloudinary.com/de1v32nv0/image/upload/v1611430638/logo/picture_ygm2uw.png" />
                </div>
              </Grid>
              <Grid item xs={8}>
                <div className="contain">
                  <div className="headingChip">
                    <h4>{data.heading}</h4>
                    <div className="randomCard">
                      {chipData.map((data) => (
                        <Chip
                          color={data.color}
                          className="chipCard"
                          size="small"
                          label={data.label}
                          key={data.key}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="ratingCard1">
                  <span style={{ fontSize: "14px", color: "#444444d7" }}>
                    by <span className="byCardText"> {data.by} </span>
                    <span>
                      {" "}
                      <Rating
                        className="ratingCard"
                        size="small"
                        name="read-only"
                        value={data.stars}
                        readOnly
                      />{" "}
                      <span>({data.rating})</span>
                    </span>
                  </span>
                </div>
                <div className="descriptionCard">
                  <span className="spantextCard">{data.description}</span>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className="favCard">
                  <StyledRating
                    name="customized-color"
                    defaultValue={0}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    precision={1}
                    size="small"
                    max={1}
                    icon={<FavoriteIcon fontSize="inherit" />}
                  />
                </div>
                <div className="btn">
                  <Button
                    onClick={handleClick}
                    variant="outlined"
                    className="btn"
                    color="primary"
                  >
                    Primary
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        );
      })}
      <div className="pageCard">
        <div style={{ overflow: "hidden" }}>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            className="popupDialog"
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box p={0}>
              <Card />
            </Box>
          </Popover>
        </div>
      </div>
    </div>
  );
};
export default Cards;
