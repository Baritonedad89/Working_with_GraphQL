const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const CONNECTION_URL =
  "mongodb+srv://codyjarrett:secretcode123@cluster0-86n2g.mongodb.net/GraphQL_Tut?retryWrites=true";
const cors = require("cors");

const app = express();

// allow cross-origin requests - make sure to call it ()
app.use(cors());

const options = {
  useNewUrlParser: true
};
// connect to mongodb atlas database & server

mongoose.connect(CONNECTION_URL, options, function(error) {
  if (error) throw error;
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 4000;




app.listen(PORT, () => {
  
  // mongoose.connection.once('open', ()=> console.log('connected to database'))

  console.log(`now listening to requests on port ${PORT}`);
});
