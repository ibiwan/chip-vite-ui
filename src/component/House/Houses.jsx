import { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'

import { fetchPlayers } from 'state/player'

import {
  invitePlayerToHouse,
  selectHouseListMode,
  startCreateHouse,
  HouseListModes,
  selectHouses,
  fetchHouses,
} from 'state/house'

import { EditHouse } from 'component/House/EditHouse'
import { Players } from 'component/Player/Players'

import { AddHouse, House } from "."

const HousesInner = (_props) => {
  const { mode, houseId: selectedHouseId } = selectHouseListMode() ?? {}

  useEffect(() => {
    fetchHouses()
    fetchPlayers()
  }, [])

  const houses = selectHouses()

  const handlePlayerClickedForHouse = (houseId) => (playerId) => {
    invitePlayerToHouse(houseId, playerId)
  }

  if (!houses) {
    return <></>
  }

  return <>
    <div className='ListTitle'>Houses</div>
    <div className="card">
      {houses.map((house) => {
        const handlePlayerClicked = handlePlayerClickedForHouse(house.id)

        return (
          <Fragment key={house.id} >
            {mode === HouseListModes.EditName && selectedHouseId === house.id &&
              <EditHouse house={house} />
            }
            <Link to={`/houses/${house.id}`}>
              <House key={house.id} house={house} />
            </Link>
            {mode === HouseListModes.InvitePlayer && selectedHouseId === house.id &&
              <Players title={'Select an Invitee'} handlePlayerClicked={handlePlayerClicked} />
            }
          </Fragment>)
      })}
      {mode === HouseListModes.Create
        ? <AddHouse />
        : <button onClick={startCreateHouse}>add</button>}
    </div >
  </>
}

export const Houses = observer(HousesInner)
