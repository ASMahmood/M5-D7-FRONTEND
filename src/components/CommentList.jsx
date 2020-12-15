import React from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends React.Component {
  state = {
    comments: [],
    loading: true,
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2N2UzZjk4MzViMDAwMTc1ODRlZmUiLCJpYXQiOjE2MDU3OTUzOTIsImV4cCI6MTYwNzAwNDk5Mn0.DfmIOMUkFDOn23K1S3KRRfRDXdq3PuQ85LIP5I7piVI",
          },
        }
      );
      let comments = await response.json();
      this.setState({ comments: comments, loading: false });
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }
  };

  componentDidMount = () => {
    this.fetchComments();
    console.log("fetching comments");
  };

  componentDidUpdate = (previousProps) => {
    if (previousProps.bookId !== this.props.bookId) {
      this.fetchComments();
    }
  };

  render() {
    return (
      <>
        {this.state.loading && (
          <div className="w-100 my-2 d-flex justify-content-center">
            <span>Loading comments...</span>
            <Spinner animation="border" variant="success" />
          </div>
        )}
        <ListGroup variant="flush" className="w-100">
          {this.state.comments.map((comment, index) => (
            <SingleComment commentObj={comment} key={index} />
          ))}
        </ListGroup>
      </>
    );
  }
}

export default CommentList;
