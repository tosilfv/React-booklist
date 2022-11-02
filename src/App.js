import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import BookRouter from "./routes/BookRouter";
import BookProvider from "./contexts/BookContext";

export default function App() {
  return (
    <BookProvider>
      <ThemeProvider theme={theme}>
        <BookRouter />
      </ThemeProvider>
    </BookProvider>
  );
}
