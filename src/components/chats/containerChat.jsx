import Chats from "./index";
import {connect} from "react-redux";
import {addChatTC, removeChatTC} from "./chatsReducer";


const mapStateToProps = (state) => {
    return {
        messageList: state.chatMessage,
        chatName: state.chats
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addedChat: (value) => {
            dispatch(addChatTC(value))
        },
        removeChat: (id) => {
            dispatch(removeChatTC(id))
        }
    }
}
const ContainerChat = connect(mapStateToProps, mapDispatchToProps)(Chats)
export default ContainerChat