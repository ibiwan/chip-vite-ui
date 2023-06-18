import { action } from 'satcheljs';

export const setCurrentUser = action(
  'SET_CURRENT_USER',
  (user) => ({ user })
)

export const clearCurrentUser = action(
  'SET_CURRENT_USER',
  () => ({ user: null })
)

export const fetchCurrentUser = action(
  'FETCH_CURRENT_USER',
  () => ({})
)

export const loginUser = action(
  'LOGIN_USER',
  (username, password) => ({ username, password })
)

export const reloadLogin = action(
  'RELOAD_LOGIN',
  () => ({})
);

export const refreshToken = action(
  'REFRESH_TOKEN',
  (token) => ({ token })
)

export const logoutUser = action(
  'LOGOUT_USER',
  () => ({})
)

export const goodToken = action(
  'GOOD_TOKEN',
  (token) => ({ token })
)
