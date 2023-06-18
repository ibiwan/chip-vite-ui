import { observer } from 'mobx-react'
import { useEffect } from 'react'

import {
  selectCurrentUser,
  fetchCurrentUser,
} from 'state/user'

const CurrentUserInner = () => {
  useEffect(() => { fetchCurrentUser() }, [])
  const currentUser = selectCurrentUser()

  if (!currentUser) { return <></> }

  return <div className="card">
    <div>Current Player</div>
    <div className="card">
      {currentUser &&
        <div>{currentUser.username}</div>
      }
    </div>
  </div>
}

export const CurrentUser = observer(CurrentUserInner)
