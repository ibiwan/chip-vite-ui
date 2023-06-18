import { mutator } from 'satcheljs';

import { logoutUser } from 'state/user';

import {
  pickPlayerToInviteToHouse,
  resetHouseViewMode,
  startCreateHouse,
  startEditHouse,
  setHouses,
  addHouse,
} from './houseActions';

import {
  HouseListModes,
  getHouseStore,
} from './houseStore';

mutator(setHouses, ({ houses: fullHouses }) => {
  const bareHouses = fullHouses.map(fullHouse => {
    const { playerLinks, ...bareHouse } = fullHouse
    const shallowLinks = playerLinks.map((link) => ({
      playerId: link.player.id,
      status: link.status,
    }))
    getHouseStore().playerLinks[fullHouse.id] = shallowLinks
    return bareHouse;
  })
  getHouseStore().houses = bareHouses
})

mutator(addHouse, ({ house: fullHouse }) => {
  const { playerLinks, ...bareHouse } = fullHouse
  const withoutHouse = getHouseStore().houses.filter(house =>
    house.id !== bareHouse.id)
  getHouseStore().houses = [...withoutHouse, bareHouse]

  const shallowLinks = playerLinks.map((link) => ({
    playerId: link.player.id,
    status: link.status
  }))
  getHouseStore().playerLinks[fullHouse.id] = shallowLinks
})

mutator(resetHouseViewMode, () => {
  getHouseStore().houseListMode = {
    mode: HouseListModes.View,
    houseId: null
  }
})

mutator(startCreateHouse, () => {
  getHouseStore().houseListMode = {
    mode: HouseListModes.Create,
    houseId: null
  }
})

mutator(startEditHouse, ({ houseId }) => {
  getHouseStore().houseListMode = {
    mode: HouseListModes.EditName,
    houseId
  }
})

mutator(pickPlayerToInviteToHouse, ({ houseId }) => {
  getHouseStore().houseListMode = {
    mode: HouseListModes.InvitePlayer,
    houseId
  }
})

mutator(logoutUser, () => {
  getHouseStore().houses = [];
  getHouseStore().playerLinks = {};
})
