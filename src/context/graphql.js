import {
  InMemoryCache,
  ApolloClient,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql', })

const authLink = new ApolloLink((op, fwd) => {
  const token = localStorage.getItem('token')

  op.setContext(({ headers: oldHeaders }) => {
    return {
      headers: {
        ...oldHeaders,
        Authorization: `Bearer ${token}`
      }
    }
  })

  return fwd(op)
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

