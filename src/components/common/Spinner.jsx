import React from "react";

import spinnerLight from "../../assets/spinner-light.svg";
import spinnerDark from "../../assets/spinner-dark.svg";

const Spinner = ({ name = "spinner-light", visible = true }) => {
  if (name === "spinner-light")
    return visible ? <img src={spinnerLight} alt="Loading..." /> : null;
  if (name === "spinner-dark")
    return visible ? <img src={spinnerDark} alt="Loading..." /> : null;
};

export default Spinner;
