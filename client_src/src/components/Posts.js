import React, { Component } from 'react';
import axios from 'axios';
import Entry from './Entry';

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        this.getPosts();
    }

    getPosts() {
        axios.get('http://localhost:3000/api/posts')
            .then(response => {
                this.setState({posts: response.data}, () => {
                   //console.log(this.state);
                })
            })
            .catch(err => console.log(err));
    }
    
    render() {
        const entries = this.state.posts.map((entry, idx) => {
            return (
                <Entry key={entry.id} body={entry}/>
            )
        })
        return (
            <div>
                <h1>posts</h1>
                <ul className="collection">
                    {entries}
                </ul>
            </div>
        )
    }
}

export default Posts;