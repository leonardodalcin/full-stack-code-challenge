import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import "./App.css";
import BoatCard from "./components/BoatCard";
import ApolloClient from "apollo-boost";

function App() {
  const client = new ApolloClient({
    uri: "https://sls-sandbox.zizoo.com/graphql"
  });
  return (
    <ApolloProvider client={client}>
      <div className="App-grid">
        <div>sidemenu</div>
        <BoatCard></BoatCard>
      </div>
    </ApolloProvider>
  );
}

export default App;
