import React, { Component } from "react";
import { graphql } from "react-apollo";
// import the query
import {getBooksQuery} from '../queries/queries'

// components
import BookDetails from './BookDetails'

class BookList extends Component {

  state = {
    selected: null,
  }


  displayBooks() {
    const data = this.props.data;
    if (data.loading) {
      return <div>Loading books...</div>;
    } else {
      return data.books.map(book => {
        return <li key={book.id} onClick={e => {this.setState({selected: book.id})}}>{book.name}</li>;
      });
    }
  }
  render() {
    const { selected } = this.state; 
    return (
      <div>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
        {/* pass book id to component */}
        <BookDetails bookId={selected}/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
