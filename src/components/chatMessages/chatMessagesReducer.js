import {ref, set} from "firebase/database";
import {database} from "../../api/initialFireBase";

const initialState = {}


export const chatMessage = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}


export const answerBot = (message, chatID) => async () => {
    const uuid = Date.now()

    setTimeout(async () => {
        const added = await set(ref(database, '/chats/' + chatID + '/messages/' + uuid), {
            author: 'bot', message: message, id: uuid
        });
    }, 1000)

}

export const addChatMessageTC = (author, message, chatID) => async () => {
    const uuid = Date.now()

    const added = await set(ref(database, '/chats/' + chatID + '/messages/' + uuid), {
        author: author, message: message, id: uuid
    });
}