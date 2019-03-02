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
                hi
            </div>
        );
    }
}
export default Chat;
