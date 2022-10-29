import { ApolloClient, InMemoryCache } from '@apollo/client';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
    uri: 'https://rapid-adder-83.hasura.app/v1/graphql',
    headers: {
        "x-hasura-admin-secret": "D44nxQ2GunGwK5zEbwkvMyu8zuyZ1givuhwVjZPkbK8c9gy0kyiFFtQj5Q5cU0Bq"
    }
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://rapid-adder-83.hasura.app/v1/graphql',
    connectionParams: {
        headers: {
            "x-hasura-admin-secret": "D44nxQ2GunGwK5zEbwkvMyu8zuyZ1givuhwVjZPkbK8c9gy0kyiFFtQj5Q5cU0Bq"
        }
    }
}));

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});