import { logoutUser } from 'state/user'

export const Logout = () => {
  return <>
    <button onClick={logoutUser}>logout</button>
  </>
}
