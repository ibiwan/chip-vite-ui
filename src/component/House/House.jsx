import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import { selectPlayerById } from 'state/player';

import {
  selectPlayerLinksForHouseId,
  pickPlayerToInviteToHouse,
  selectHouseListMode,
  selectHouseById,
  HouseListModes,
  startEditHouse,
  deleteHouse,
  fetchHouseById,
} from 'state/house';

import { EditHouse } from 'component/House/EditHouse';
import { useEffect } from 'react';

const HouseInner = (props) => {
  const { houseId: houseIdStr } = useParams()
  const houseId = Number.parseInt(houseIdStr)

  let house = props.house

  useEffect(() => {
    if (houseId && !house) {
      fetchHouseById(houseId)
    }
  }, [houseId, house])

  if (!house) { house = selectHouseById(houseId) }
  if (!house) { return <></> }

  const playerLinks = selectPlayerLinksForHouseId(house.id)

  const { mode, houseId: selectedHouseId } = selectHouseListMode() ?? {}

  return <div className="card">
    <div className="card" key={house.id}>
      <div>{house.name}</div>
      {playerLinks.map(link => {
        const player = selectPlayerById(link.playerId)
        return player && <div key={player.id}>{player.username} - {link.status}</div>
      })}
    </div>
    {mode === HouseListModes.Edit && selectedHouseId === house.id &&
      <EditHouse house={house} />
    }
    {mode === HouseListModes.View &&
      <div className="CrudButtons">
        <button onClick={() => startEditHouse(house.id)}>edit name</button>
        <button onClick={() => pickPlayerToInviteToHouse(house.id)}>invite player</button>
        <button onClick={() => deleteHouse(house)}>delete</button>
      </div>
    }
  </div>
}

HouseInner.propTypes = {
  house: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })
}

export const House = observer(HouseInner)