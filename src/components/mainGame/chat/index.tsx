import * as React from 'react';
import {Message} from "../../../types/message";
import MessageBox from "./message/messageBox";
import {observer} from "mobx-react";
import ConversationStore from "../../../stores/ConversationStore";
import {rootStores, Stores} from "../../../stores";
import {User} from "../../../types/user";

interface IProps {
    messages: Message[]
}

const conversationStore: ConversationStore = rootStores[Stores.CONVERSATION];

@observer
class Chat extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }


    renderMessages = () => {
      // Variable Definition
      const {messages} = this.props;

      // Code Section
        return messages.map( (message:Message) =>
            <MessageBox message={message}/>
        )

    };


    render() {
        return (
            <div className={"chat-container"}>

                <div className={"header"}>
                    <div className={"padding"}>
                        <div className={"username"}>Daniel Huri</div>
                    </div>
                </div>

                <div className={"body"}>
                    {this.renderMessages()}
                </div>

                <div className={"footer"}>
                    <div className={"text-container"}>
                        <textarea rows={1} ></textarea>
                    </div>
                    <button onClick={conversationStore.pushNewMessage} className={"send-message-container"}>send message</button>
                </div>

            </div>
        );
    }
}
export default Chat;
