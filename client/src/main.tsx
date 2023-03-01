import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { apolloClientConfig } from "./shared/constant/apollo";
import { BrowserRouter } from "react-router-dom";

import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
} from "@apollo/client";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient(
  apolloClientConfig
);

console.log("client", client);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ApolloProvider>
);
