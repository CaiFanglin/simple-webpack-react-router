import React from 'react';
import { render } from 'react-dom';

let author = 'caifanglin';
let date = new Date().toUTCString();

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<section>
            作者: {author}
            <br/>
            时间: {date}
        </section>)
    }
}