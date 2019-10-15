import App from "next/app";
import React from "react";

import withApolloClient from "../lib/withApollo";
import { ApolloProvider } from "@apollo/react-hooks";

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
