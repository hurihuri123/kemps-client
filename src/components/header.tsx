import * as React from 'react';

interface IProps {
    name: string;
}


class Header extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
        console.log('hi' + this.props.name);
    }

    renderHelloMessage() {
        return <h1>Hello {this.props.name}</h1>;
    }

    render() {
        return (
          this.renderHelloMessage()
        );
    }
}
export default Header;
