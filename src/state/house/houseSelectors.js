import { getHouseStore } from './houseStore';

export const selectHouses = () =>
  getHouseStore().houses

export const selectHouseListMode = () =>
  getHouseStore().houseListMode

export const selectPlayerLinksForHouseId = (houseId) =>
  getHouseStore().playerLinks[houseId]

export const selectHouseById = (houseId) =>
  getHouseStore().houses.find(house => house.id === houseId)
