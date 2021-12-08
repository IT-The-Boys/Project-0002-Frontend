import { configureStore, combineReducers } from '@reduxjs/toolkit'
import chat from './chat/chatSlice'
import auth from './auth/authSlice'
import lobby from './lobby/lobbySlice'
import app from './app/appSlice'
import cahGame from './game/cahGameSlice'

const reducer = combineReducers({
  chat,
  auth,
  lobby,
  app,
  cahGame
})

const store = configureStore({
  reducer,
})

export default store