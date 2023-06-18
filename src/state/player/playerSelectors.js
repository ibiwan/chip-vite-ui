import { getPlayerStore } from './playerStore'

export const selectPlayers = () => getPlayerStore().players

export const selectPlayerById = (id) => getPlayerStore().players
  .find(player => player.id === id)
