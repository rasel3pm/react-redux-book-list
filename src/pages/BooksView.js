import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Container } from "react-bootstrap";
import { deleteBook } from "../redux/state/counter/bookSlice";
import { Link } from "react-router-dom";
const BooksView = () => {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <Container className="mt-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            const { id, title, author } = book;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{author}</td>
                <td className="d-block d-flex justify-content-around">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteBook(id)}
                  >
                    Delate
                  </button>
                  <Link to="/edit-book" state={{ id, title, author }}>
                    <button className="btn btn-primary">Edite</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default BooksView;
