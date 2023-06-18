import { redirect } from 'react-router-dom';
import { mutator } from 'satcheljs';

import { logoutUser, setCurrentUser } from './userActions';
import { getUserStore } from './userStore';

mutator(setCurrentUser, (actionMessage) => {
  getUserStore().currentUser = actionMessage.user
})

mutator(logoutUser, () => {
  redirect('/')
  getUserStore().currentUser = null;
  getUserStore().token = null;
})
