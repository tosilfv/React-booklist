import React from "react";
import { Route, Routes } from "react-router-dom";
import BookForm from "../components/BookForm";
import Books from "../components/Books";
import NavBar from "../components/NavBar";

export default function BookRouter() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/bookform" element={<BookForm />} />
        <Route exact path="/" element={<Books />} />
      </Routes>
    </>
  );
}
