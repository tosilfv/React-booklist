import React from "react";
import { Typography, useTheme } from "@mui/material";
import BookList from "./BookList";

export default function Books() {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h4" style={theme.layout.alignment}>
        Books
      </Typography>
      <BookList />
    </>
  );
}
