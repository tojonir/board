require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { auth } = require("./routes/auth");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./graphql/schema");
const { resolvers } = require("./graphql/resolvers");

const graphql = new ApolloServer({ typeDefs, resolvers });

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/auth", auth);

const start = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(async () => {
      console.log("db connected successfuly");
      app.listen(port, () => console.log(`server is running on port ${port}`));
      await graphql.start();
      graphql.applyMiddleware({ app });
      console.log(`graphql path: ${graphql.graphqlPath}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

start();
