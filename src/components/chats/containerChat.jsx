import Chats from "./index";
import {connect} from "react-redux";
import {addedChatAC, removeChatAC} from "./chatsReducer";



const mapStateToProps = (state) => {
    return {
        messageList: state.chatMessage,
        chatName: state.chats
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addedChat: (value) => {
            dispatch(addedChatAC(value))
        },
        removeChat: (id) => {
            dispatch(removeChatAC(id))
        }
    }
}
const ContainerChat = connect(mapStateToProps, mapDispatchToProps)(Chats)
export default ContainerChat