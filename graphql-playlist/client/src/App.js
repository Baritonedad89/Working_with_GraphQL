import React from "react";
// components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook"

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Cody's Book List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
