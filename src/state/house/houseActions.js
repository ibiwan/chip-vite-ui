import { action } from 'satcheljs';

// #region house list
export const fetchHouses = action(
  'FETCH_HOUSES', () => ({}))

export const fetchHouseById = action(
  'FETCH_HOUSE_BY_ID',
  (houseId) => ({ houseId })
)

export const resetHouseViewMode = action(
  'RESET_HOUSE_VIEW_MODE', () => ({}))

export const setHouses = action(
  'SET_HOUSES', (houses) => ({ houses }))

export const addHouse = action(
  'ADD_HOUSE', (house) => ({ house })
)
// #endregion

// #region house crud
export const startCreateHouse = action(
  'START_CREATE_HOUSE', () => ({}))

export const createHouse = action(
  'CREATE_HOUSE', (name) => ({ name }))

export const deleteHouse = action(
  'DELETE_HOUSE', (house) => ({ house }))

export const startEditHouse = action(
  'EDIT_HOUSE', (houseId) => ({ houseId }))

export const editHouse = action(
  'EDIT_HOUSE', (houseId, name) => ({ houseId, name }))
// #endregion

// #region house players
export const pickPlayerToInviteToHouse = action(
  'PICK_PLAYER_TO_INVITE_TO_HOUSE', (houseId) => ({ houseId }))

export const invitePlayerToHouse = action(
  'INVITE_PLAYER_TO_HOUSE', (houseId, playerId) => {
    return { houseId, playerId }
  })

export const fetchPlayersForHouse = action(
  'FETCH_PLAYERS_FOR_HOUSE', (houseId) => ({ houseId }))

export const setPlayersForHouse = action(
  'FETCH_PLAYERS_FOR_HOUSE', (houseId, invitees) => ({ houseId, invitees }))
// #endregion
 