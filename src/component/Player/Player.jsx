import { observer } from 'mobx-react'
import PropTypes from 'prop-types';

const PlayerInner = ({ player, handlePlayerClicked }) => {
  const handleClick = () => {
    if (handlePlayerClicked) {
      handlePlayerClicked(player.id)
    }
  }
  return (
    <div className="card" onClick={handleClick}>
      <div className="card">
        {player &&
          <div>{player.username}</div>
        }
      </div>
    </div>
  )
}

PlayerInner.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
  }),
  handlePlayerClicked: PropTypes.func,
}

export const Player = observer(PlayerInner)
