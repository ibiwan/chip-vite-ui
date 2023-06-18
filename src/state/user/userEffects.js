import { apolloClient } from 'context/graphql';

import { GET_CURRENT_USER } from 'gql/queries';

export const fetchCurrentUserFromApi = async () => {
  try {
    const result = await apolloClient.query({
      query: GET_CURRENT_USER,
    })
    return result.data.getCurrentPlayer
  } catch (e) { console.error('issue fetching current user from api', e) }
}

export const sendLoginToApi = async (username, password) => {
  try {
    const result = await fetch("http://localhost:3000/auth/login", {
      mode: "cors", method: 'POST',
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify(
        { username, password }
      ),
    });
    const { token, expiry } = await result.json();
    return { token, expiry }
  } catch (e) { console.error('issue logging into api', e) }
}

export const getLPT = () => {
  const username = localStorage.getItem('username')
  const password = localStorage.getItem('password')
  const token = localStorage.getItem('token')

  return { username, password, token }
}

export const setLPT = ({ username, password, token }) => {
  try {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password)
    localStorage.setItem('token', token);
  } catch (e) { console.error('issue sending data to local storage', e) }
}

export const clearLPT = () => {
  localStorage.removeItem('username')
  localStorage.removeItem('password')
  localStorage.removeItem('token')
}
