import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { Box, Button, Paper, Typography, useTheme } from "@mui/material";
import { DispatchContext, TabContext } from "../contexts/BookContext";
import { HOME_TAB } from "../constants/bookConstants";
import SaveIcon from "@mui/icons-material/Save";
import BookInput from "./BookInput";
import useInputForm from "../hooks/useInputForm";

export default function BookForm() {
  const [author, handleAuthorChange, resetAuthor, authorError] = useInputForm();
  const [name, handleNameChange, resetName, nameError] = useInputForm();
  const [, setTab] = useContext(TabContext);
  const { dispatch } = useContext(DispatchContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const handleSaveBook = (evt) => {
    evt.preventDefault();
    if (!authorError && !nameError) {
      dispatch({ type: "ADD-BOOK", name, author, id: uuid() });
      resetAuthor();
      resetName();
      navigate("/");
      setTab({ type: "NEW-TAB", tab: HOME_TAB });
    }
  };
  return (
    <>
      <Typography variant="h4" style={theme.layout.alignment}>
        Add Book
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        style={theme.layout.alignment}
      >
        <Paper elevation={3} style={theme.layout.paper}>
          <BookInput
            htmlFor="name"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            error={nameError}
          />
          <BookInput
            htmlFor="author"
            id="author"
            name="author"
            value={author}
            onChange={handleAuthorChange}
            error={authorError}
          />
          <Button
            type="submit"
            onClick={handleSaveBook}
            variant="outlined"
            startIcon={<SaveIcon />}
            disabled={authorError || nameError}
          >
            Save Book
          </Button>
        </Paper>
      </Box>
    </>
  );
}
