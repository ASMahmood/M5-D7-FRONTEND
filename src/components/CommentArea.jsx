import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import "./CommentArea.css";

class CommentArea extends React.Component {
  render() {
    if (this.props.bookId) {
      return (
        <Container id="commentArea">
          <Row>
            <Col xs={6} className="offset-3">
              <img src={this.props.bookImg} alt="" width="100%" />
            </Col>
          </Row>
          <Row>
            <CommentList bookId={this.props.bookId} />
            <AddComment bookId={this.props.bookId} />
          </Row>
        </Container>
      );
    } else {
      return (
        <Container id="commentArea">
          <Row>
            <h5 id="commentArea">
              Click a Book to view the opinions of others!
            </h5>
          </Row>
        </Container>
      );
    }
  }
}

export default CommentArea;
