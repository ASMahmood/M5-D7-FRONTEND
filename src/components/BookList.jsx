import React from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { Form, Container, Row, Col } from "react-bootstrap";

class BookList extends React.Component {
  state = {
    booklist: this.props.arr,
    selected: {},
  };

  filterBookList = (input) => {
    this.setState({
      booklist: this.props.arr.filter((book) =>
        book.title.toLowerCase().includes(input.toLowerCase())
      ),
    });
  };
  onSelect = (selectedBook) => {
    this.setState({ selected: selectedBook });
  };

  componentDidUpdate = (previousProps, previousState) => {
    if (previousState.selected !== this.props.selected) {
      console.log("AFTER BOOKLIST UPDATE", this.state.selected);
    }
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => this.filterBookList(e.target.value)}
                    type="text"
                    placeholder="Search for book"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              <Row>
                {this.state.booklist.map((item) => (
                  <SingleBook
                    onSelect={this.onSelect}
                    book={item}
                    key={item.asin}
                  />
                ))}
              </Row>
            </Col>
            <Col md={3}>
              <CommentArea
                bookId={this.state.selected.asin}
                bookImg={this.state.selected.img}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
