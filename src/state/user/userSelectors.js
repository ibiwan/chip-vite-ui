import { getUserStore } from 'state/user'

export const selectCurrentUser = () => getUserStore().currentUser

export const selectIsLoggedIn = () => getUserStore().currentUser !== null
