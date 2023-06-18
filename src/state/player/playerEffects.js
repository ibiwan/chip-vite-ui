import { apolloClient } from 'context/graphql';

import { GET_PLAYERS } from 'gql/queries';

export const fetchPlayersFromApi = async () => {
  try {
    const result = await apolloClient.query({
      query: GET_PLAYERS,
    })
    return result.data.getAllPlayers
  } catch (e) { console.error('issue fetching player list from api', e) }
}
