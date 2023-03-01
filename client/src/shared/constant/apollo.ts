import { InMemoryCache } from "apollo-cache-inmemory";

export const apolloClientConfig = {
  uri: process.env.APOLLO_BASE_URL,
  cache: new InMemoryCache(),
};
