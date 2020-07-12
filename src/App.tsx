import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import "./App.css";
import BoatCard from "./components/BoatCard";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://sls-sandbox.zizoo.com/graphql"
});
function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <div className="App-grid">
          <div>sidemenu</div>
          <BoatCard></BoatCard>
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
