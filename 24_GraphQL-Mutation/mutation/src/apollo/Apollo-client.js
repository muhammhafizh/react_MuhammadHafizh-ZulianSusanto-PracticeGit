import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://rapid-adder-83.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
     "x-hasura-admin-secret": "D44nxQ2GunGwK5zEbwkvMyu8zuyZ1givuhwVjZPkbK8c9gy0kyiFFtQj5Q5cU0Bq"
    }
});