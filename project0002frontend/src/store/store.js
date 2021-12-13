import { configureStore, combineReducers } from '@reduxjs/toolkit'
import chat from './chat/chatSlice'
import auth from './auth/authSlice'
import lobby from './lobby/lobbySlice'
import app from './app/appSlice'
import modal from './ui/modalSlice'
import cahWiki from './database/cahSlice'
const reducer = combineReducers({
  chat,
  auth,
  lobby,
  app,
  modal,
  cahWiki
})

const store = configureStore({
  reducer,
})

export default store