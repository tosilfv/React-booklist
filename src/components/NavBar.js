import React, { useContext, useEffect } from "react";
import { Box, Tabs } from "@mui/material";
import { TabContext } from "../contexts/BookContext";
import { HOME_TAB } from "../constants/bookConstants";
import LinkTab from "../components/LinkTab";

export default function NavBar() {
  const [tab, setTab] = useContext(TabContext);
  const handleChange = (evt, newTab) => {
    setTab({ type: "NEW-TAB", tab: newTab });
  };
  // starting the app sets navbar tab to HOME
  useEffect(() => {
    setTab({ type: "NEW-TAB", tab: HOME_TAB });
  }, [setTab]);
  return (
    <Box>
      <Tabs
        variant="fullWidth"
        value={tab}
        onChange={handleChange}
        aria-label="nav tabs"
      >
        <LinkTab label="Home" pathname="/" />
        <LinkTab label="Add Book" pathname="/bookform" />
      </Tabs>
    </Box>
  );
}
