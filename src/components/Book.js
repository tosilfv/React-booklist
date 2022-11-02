import React, { useContext } from "react";
import { Box, Button, TableCell, TableRow, TextField } from "@mui/material";
import { DispatchContext } from "../contexts/BookContext";
import useInputForm from "../hooks/useInputForm";
import useToggle from "../hooks/useToggle";

export default function Book({ book }) {
  const [editing, toggleEdit] = useToggle();
  const [newAuthor, handleAuthorChange, resetAuthor] = useInputForm();
  const [newName, handleNameChange, resetName] = useInputForm();
  const { dispatch } = useContext(DispatchContext);
  const handleEdit = () => {
    resetAuthor();
    resetName();
    toggleEdit();
  };
  const handleRemove = () => {
    dispatch({ type: "REMOVE-BOOK", id: book.id });
  };
  const handleSave = (evt) => {
    evt.preventDefault();
    // use defaultValue if input field is not changed, otherwise use useInputForm()
    let author;
    let name;
    newAuthor === "" ? (author = book.author) : (author = newAuthor);
    newName === "" ? (name = book.name) : (name = newName);
    dispatch({ type: "EDIT-BOOK", id: book.id, author, name });
    handleEdit();
  };
  return editing ? (
    <TableRow key={book.id}>
      <TableCell component="td" scope="row">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSave}
        >
          <TextField
            variant="outlined"
            name="newName"
            onChange={handleNameChange}
            defaultValue={book.name}
          />
        </Box>
      </TableCell>
      <TableCell component="td" scope="row">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSave}
        >
          <TextField
            variant="outlined"
            name="newAuthor"
            onChange={handleAuthorChange}
            defaultValue={book.author}
          />
        </Box>
      </TableCell>
      <TableCell component="td" scope="row">
        {book.id}
      </TableCell>
      <TableCell component="td" scope="row">
        <Button type="submit" onClick={handleSave} variant="outlined">
          Save
        </Button>
      </TableCell>
      <TableCell component="td" scope="row">
        <Button type="submit" onClick={handleEdit} variant="outlined">
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  ) : (
    <TableRow key={book.id}>
      <TableCell component="td" scope="row">
        {book.name}
      </TableCell>
      <TableCell component="td" scope="row">
        {book.author}
      </TableCell>
      <TableCell component="td" scope="row">
        {book.id}
      </TableCell>
      <TableCell component="td" scope="row">
        <Button type="submit" onClick={handleEdit} variant="outlined">
          Edit
        </Button>
      </TableCell>
      <TableCell component="td" scope="row">
        <Button type="submit" onClick={handleRemove} variant="outlined">
          Remove
        </Button>
      </TableCell>
    </TableRow>
  );
}
