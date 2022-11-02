import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import BookRouter from "./routes/BookRouter";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BookRouter />
    </ThemeProvider>
  );
}
