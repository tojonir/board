import { ApolloClient } from "@apollo/client";
import { cache } from "@graphql/cache";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});
