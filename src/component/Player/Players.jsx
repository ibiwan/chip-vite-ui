import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import {
  selectPlayers,
  fetchPlayers,
} from 'state/player';

import { Player } from './Player'

const PlayersInner = (props) => {
  const { handlePlayerClicked, title } = props

  useEffect(() => {
    fetchPlayers()
  }, [])

  const players = selectPlayers()

  if (!players || players.length === 0) {
    return <></>
  }

  return <>
    <div className='card'>
      <div>{title ?? 'Players'}</div>
      {players && players.map((player) =>
        <Player
          key={player.id}
          player={player}
          handlePlayerClicked={handlePlayerClicked}
        />
      )}
    </div>
  </>
}

PlayersInner.propTypes = {
  handlePlayerClicked: PropTypes.func,
  title: PropTypes.string
}

export const Players = observer(PlayersInner)
