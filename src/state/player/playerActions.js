import { action } from 'satcheljs';

export const setPlayers = action(
  'SET_PLAYERS',
  (players) => ({ players })
)

export const fetchPlayers = action(
  'FETCH_PLAYERS',
  () => ({})
)

