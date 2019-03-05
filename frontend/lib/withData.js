import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { endpoint } from "../config";

const productionEndpoint = "";

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "production" ? productionEndpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    }
  });
}

export default withApollo(createClient);
