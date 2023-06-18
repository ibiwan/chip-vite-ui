import { createStore } from 'satcheljs';

// need to import to activate/execute file contents
import './houseOrchestrators'
import './houseMutators'

// inviteesByHouse
// {...houseId: {playerId, inviteStatus}}

export const HouseListModes = {
  View: Symbol("view"),
  Create: Symbol("create"),
  EditName: Symbol("editName"),
  InvitePlayer: Symbol("invitePlayer"),
}

export const HousePlayerInviteModes = {
  Invited: Symbol("INVITED"),
  Requested: Symbol("REQUESTED"),
  Member: Symbol('MEMBER'),
  Present: Symbol("PRESENT"),
  Banned: Symbol("BANNED")
}

export const getHouseStore = createStore(
  'houseStore',
  {
    houses: [],
    houseListMode: { mode: HouseListModes.View, houseId: null },
    playerLinks: {},
  }
);
