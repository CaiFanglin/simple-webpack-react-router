import React from 'react';
import { render } from 'react-dom';

export default class List extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<section>
            <ul>
                <li>wu</li>
                <li>ha</li>
                <li>ha</li>
                <li>wu</li>
                <li>ha</li>
                <li>ha</li>
            </ul>
        </section>)
    }
}