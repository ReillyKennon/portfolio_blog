import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: ''
        }
    }

    componentWillMount() {
        this.getPostDetail();
    }

    getPostDetail() {
        let postId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/posts/${postId}`)
            .then(response => {
                this.setState({details: response.data}, () => {
                    console.log(this.state);
                })
            })
            .catch(err => console.log(err));
        
    }

    onDelete() {
        let postId = this.state.details.id;
        axios.delete(`http://localhost:3000/api/posts/${postId}`)
            .then(response => {
                this.props.history.push('/');
            }).catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <br />
                <Link className="btn gray" to="/">Back</Link>
                <h1>{this.state.details.title}</h1>
                <ul className="collection">
                    <li className="collection-item">{this.state.details.content}</li>
                </ul>
                <Link className="btn" to={`/posts/edit/${this.state.details.id}`}>Edit</Link>
                <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button> 
            </div>
        )
    }
}

export default PostDetails; 