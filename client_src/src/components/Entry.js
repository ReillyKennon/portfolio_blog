import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: props.body
        }
    }
    render() {
        return (
            <li className="collection-item">
                <Link to={`/posts/${this.state.body.id}`}>{this.state.body.title}</Link>
            </li>
        )
    }
}

export default Entry; 