import "./buttongroup.css";
import React from "react";
import Button from "@material-ui/core/Button";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
const Buttongroup = () => {
  const [buttonData, setButtonData] = React.useState([
    { key: 0, label: "Formularies" },
    { key: 1, label: "Benefits" },
    { key: 2, label: "Networks" },
    { key: 3, label: "ViewAll" },
  ]);
  return (
    <div className="">
      <div className="buttonGroup">
        {buttonData.map((data) => {
          return (
            <Button
              startIcon={<DescriptionOutlinedIcon />}
              className="buttonBg"
              key={data.key}
              variant="outlined"
              color="primary"
              size="large"
            >
              {data.label}
            </Button>
          );
        })}
      </div>
      <div className="contactusButtonGroup">
        <span>My Bazaar</span> <span className="spacerSpanContact"></span>{" "}
        <span>Contact Us</span>
      </div>
    </div>
  );
};
export default Buttongroup;
