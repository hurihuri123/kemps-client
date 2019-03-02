import * as React from 'react';

interface IProps {
}


class Chat extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }


    render() {
        return (
            <div className={"chat-container"}>
                <div className={"header"}>
                    header
                </div>
                <div className={"body"}>
                    body
                </div>
                <div className={"footer"}>
                    footer
                </div>
            </div>
        );
    }
}
export default Chat;
