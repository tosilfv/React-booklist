import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "@mui/material";

export default function LinkTab(props) {
  return <Tab component={Link} to={props.pathname} {...props} />;
}
