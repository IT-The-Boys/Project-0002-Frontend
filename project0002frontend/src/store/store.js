import { configureStore, combineReducers } from '@reduxjs/toolkit'
import chat from './chat/chatSlice'
import user from './user/userSlice'
import lobby from './lobby/lobbySlice'
const reducer = combineReducers({
  chat,
  user,
  lobby
})

const store = configureStore({
  reducer,
})

export default store