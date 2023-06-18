import jwt_decode from "jwt-decode";

export const decodeToken = (token) => jwt_decode(token)

export const isTokenValid = (decodedToken, storedUsername) => {
  const { username: tokenUsername } = decodedToken
  return storedUsername === tokenUsername
}

export const earlyExpiry = (decodedToken) => {
  try {
    const { iat: issued, exp: expiry } = decodedToken

    const stale = 0.8 * (expiry - issued) + issued
    const delay = stale * 1000 - (new Date()).getTime()

    return { delay, stale }
  }
  catch (e) { return false; }
}

export const isTokenFresh = (decodedToken) => {
  const nowTime = Math.floor((new Date()).getTime() / 1000)
  const { stale } = earlyExpiry(decodedToken)
  return nowTime < stale
}
