import * as React from 'react';
import {Message} from "../../../../types/message";
import {observer} from "mobx-react";

interface IProps {
    message: Message;
}

@observer
export default class MessageBox extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }


    render() {
        const {message} = this.props;
        return (
            <div className={"message-container"}>
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
