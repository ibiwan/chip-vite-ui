import { orchestrator } from 'satcheljs';

import {
  selectIsLoggedIn,
  logoutUser,
} from 'state/user';

import {
  HousePlayerInviteModes
} from './houseStore';

import {
  invitePlayerToHouse,
  resetHouseViewMode,
  fetchHouseById,
  createHouse,
  deleteHouse,
  fetchHouses,
  editHouse,
  setHouses,
  addHouse,
} from './houseActions';

import {
  fetchHouseByIdFromApi,
  createPlayerHouseLink,
  fetchHousesFromApi,
  createHouseAtApi,
  deleteHouseAtApi,
  editHouseAtApi,
} from './houseEffects';


orchestrator(fetchHouses, async () => {
  try {
    if (!selectIsLoggedIn()) {
      return
    }
    const houses = await fetchHousesFromApi()
    setHouses(houses)
  } catch (e) { console.error('issue fetching list of houses', e) }
})

orchestrator(fetchHouseById, async ({ houseId }) => {
  try {
    const house = await fetchHouseByIdFromApi(houseId)
    addHouse(house)
  } catch (e) { console.error('issue fetching house by id', e) }
})

orchestrator(createHouse, async ({ name }) => {
  try {
    const result = await createHouseAtApi(name)

    if (result) {
      resetHouseViewMode()
      fetchHouses()
    }
  } catch (e) { console.error('issue creating house', e) }
})

orchestrator(editHouse, async ({ houseId, name }) => {
  try {
    const result = await editHouseAtApi(houseId, { name })

    if (result) {
      resetHouseViewMode()
      fetchHouses()
    }
  } catch (e) { console.error('issue editing house name', e) }
})

orchestrator(deleteHouse, async ({ house }) => {
  try {
    const result = await deleteHouseAtApi(house)

    if (result) {
      resetHouseViewMode()
      fetchHouses()
    }
  } catch (e) { console.error('issue deleting house', e) }
})

orchestrator(invitePlayerToHouse, async ({ houseId, playerId }) => {
  try {
    const inviteMode = HousePlayerInviteModes.Invited.description.toString()
    await createPlayerHouseLink(houseId, playerId, inviteMode)
  } catch (e) { console.error('issue inviting player to house', e) }
})

orchestrator(logoutUser, () => {
  resetHouseViewMode()
})
