import * as React from 'react';
import {Message} from "../../../../types/message";
import {observer} from "mobx-react";
import {rootStores, Stores} from "../../../../stores";
import UserStore from "../../../../stores/UserStore";

interface IProps {
    message: Message;
}

const userStore: UserStore = rootStores[Stores.USER];

@observer
export default class MessageBox extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }


    render() {
        const {message} = this.props;
        const  {user} = userStore;
        return (
            <div className={`message-container ${message.user.id === user.id ? 'my-message': 'other-message'}`}>
                <div className={"user"}>
                    - {message.user.nickname} :
                </div>
                <div className={"content"}>
                    {message.content}
                </div>
            </div>
        );
    }
}
