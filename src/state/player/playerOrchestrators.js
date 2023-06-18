import { orchestrator } from 'satcheljs';

import { selectIsLoggedIn } from 'state/user';

import { fetchPlayers, setPlayers } from './playerActions';
import { fetchPlayersFromApi } from './playerEffects';

orchestrator(fetchPlayers, async () => {
  if (!selectIsLoggedIn()) {
    return
  }

  const players = await fetchPlayersFromApi()
  setPlayers(players)
})
