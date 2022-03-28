import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "../components/profile/profileReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {chats} from "../components/chats/chatsReducer";
import {chatMessage} from "../components/chatMessages/chatMessagesReducer";
import thunkMiddleware from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {randomFoxReducer} from "../components/randomFox/randomFoxReducer";
import {authReducer} from "../components/auth/authReducer";


const persistConfig = {
    key: 'root',
    storage,
}

const combineReducer = combineReducers({
    profile: profileReducer,
    chats: chats,
    chatMessage: chatMessage,
    randomFoxReducer: randomFoxReducer,
    authReducer: authReducer
})

const persistedReducer = persistReducer(persistConfig, combineReducer)


export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export const persister = persistStore(store)

window.store = store