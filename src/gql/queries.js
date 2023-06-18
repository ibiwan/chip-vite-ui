import { gql } from "@apollo/client"

export const GET_HOUSES = gql`
query Houses {
  getAllHouses { 
    id 
    name 
    playerLinks { status player { id username } } 
  }
}`

export const GET_HOUSE_BY_ID = gql`
query HouseById($houseId:Int!){
  getHouseById(houseId:$houseId){
    id name playerLinks {status player {id username}}
  }
}
`

export const CREATE_HOUSE = gql`
mutation CreateHouse($createHouseInput: CreateHouseInput!) {
  createHouse(createHouseInput: $createHouseInput) {
    id name owner { id username }
  }
}`

export const EDIT_HOUSE = gql`
mutation EditHouse($editHouseInput:EditHouseInput!){
  editHouse(editHouseInput:$editHouseInput){
    id name owner {id username}
  }
} 
`

export const DELETE_HOUSE = gql`
mutation DeleteHouse($houseId: Int!) {
  deleteHouse(houseId: $houseId)
}`

export const GET_PLAYERS = gql`
query Players {
  getAllPlayers { id username }
}`

export const GET_CURRENT_USER = gql`
query CurrentUser {
  getCurrentPlayer{
    id 
    username 
    isAdmin
  }
}`

export const CREATE_PLAYER_HOUSE_LINK = gql`
mutation CreatePlayerHouseLink($createPlayerHouseLinkInput:CreatePlayerHouseLinkInput!){
  createPlayerHouseLink(createPlayerHouseLinkInput:$createPlayerHouseLinkInput){
    id name playerLinks{ player {id username} status }
  }
}
`

export const GET_PLAYER_BY_ID = gql`
query PlayerById($playerId: Int!) {
  getPlayerById(playerId:$playerId){
    id
    username
    isAdmin
  }
}
`