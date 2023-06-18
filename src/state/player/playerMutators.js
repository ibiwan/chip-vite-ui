import { mutator } from 'satcheljs';

import { logoutUser } from 'state/user';

import { getPlayerStore } from './playerStore';
import { setPlayers } from './playerActions';

mutator(setPlayers, (actionMessage) => {
  getPlayerStore().players = actionMessage.players
})

mutator(logoutUser, () => {
  getPlayerStore().players = [];
})
