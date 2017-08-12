import React from 'react';
import { render } from 'react-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<section>
            {this.props.children}
        </section>)
    }
}

