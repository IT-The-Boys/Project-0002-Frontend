import { configureStore, combineReducers } from '@reduxjs/toolkit'
import chat from './chat/chatSlice'
import auth from './auth/authSlice'
import lobby from './lobby/lobbySlice'
const reducer = combineReducers({
  chat,
  auth,
  lobby
})

const store = configureStore({
  reducer,
})

export default store