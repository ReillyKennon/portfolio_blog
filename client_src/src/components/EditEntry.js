import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            content: ''
        }
    }

    componentWillMount() {
        this.getPostDetail();
    }

    editEntry(newEntry) {
        axios.request({
            method: 'put',
            url: `http://localhost:3000/api/posts/${this.state.id}`,
            data: newEntry
        }).then(response => {
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    getPostDetail() {
        let postId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/posts/${postId}`)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    title: response.data.title,
                    content: response.data.content
                }, () => {
                    console.log(this.state);
                })
             
            })
            .catch(err => console.log(err));
    }

    onSubmit(evt) {
        const newEntry = {
            title: this.refs.title.value,
            content: this.refs.content.value
        }
        this.editEntry(newEntry);
        evt.preventDefault();
    }

    handleInputChange(evt) {
        const target = evt.target;
        const value = target.value;
        const name = target.name

        this.setState({
            [name]: value
        })

    }
    render() {
        return (
            <div>
            <br />
            <Link className="btn gray" to="/">Back</Link>
                <h1>Edit</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="title" ref="title" value={this.state.title} onChange={this.handleInputChange.bind(this)}/>

                    </div>
                    <div className="input-field">
                    <input type="text" name="content" ref="content" value={this.state.content} onChange={this.handleInputChange.bind(this)}/>

                </div>
                <input type="submit" value="save" className="btn" />
                </form>
            </div>
        )
    }
}

export default EditEntry; 