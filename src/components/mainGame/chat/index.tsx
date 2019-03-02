import * as React from 'react';
import {Message} from "../../../types/message";
import MessageBox from "./message/messageBox";

interface IProps {
    messages: Message[]
}


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
                    <button className={"send-message-container"}>send message</button>
                </div>

            </div>
        );
    }
}
export default Chat;
