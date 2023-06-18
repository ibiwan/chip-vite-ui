import { createStore } from 'satcheljs';

// need to import to activate/execute file contents
import './playerOrchestrators'
import './playerMutators'

export const getPlayerStore = createStore(
  'playerStore',
  {
    players: [],
  }
)
