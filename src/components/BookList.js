import React, { useContext } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import { BookContext } from "../contexts/BookContext";
import Book from "./Book";

export default function BookList() {
  const { books } = useContext(BookContext);
  const theme = useTheme();
  const bookList = books.map((book) => {
    return <Book key={book.id} book={book} />;
  });
  return (
    <TableContainer
      component={Paper}
      elevation={3}
      style={theme.layout.alignment}
    >
      <Table aria-label="book table">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row">
              Name
            </TableCell>
            <TableCell component="th" scope="row">
              Author
            </TableCell>
            <TableCell component="th" scope="row">
              Id
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{bookList}</TableBody>
      </Table>
    </TableContainer>
  );
}
