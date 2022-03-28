import {v4 as uuidv4} from "uuid";
import {ref, set} from "firebase/database";
import {database} from "../../api/initialFireBase";
import axios from "axios";

const initialState = {}


export const chats = (state = initialState, action) => {
    switch (action.type) {


        default:
            return state
    }
}


export const removeChatTC = (id) => async () => {
    try {
        const remove = await axios.delete(`https://chat-kwork-online-default-rtdb.firebaseio.com/chats/${id}.json`)
    } catch (err) {
        console.log(err)
    }
}

export const addChatTC = (name) => async (dispatch) => {
    const uuid = uuidv4()

    const added = await set(ref(database, '/chats/' + uuid), {
        title: name,
        id: uuid
    });


}