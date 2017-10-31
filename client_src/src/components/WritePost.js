import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class WritePost extends Component {

    addEntry(newEntry) {
        axios.request({
            method: 'post',
            url: 'http://localhost:3000/api/posts',
            data: newEntry
        }).then(response => {
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }
    onSubmit(evt) {
        const newEntry = {
            title: this.refs.title.value,
            content: this.refs.content.value
        }
        this.addEntry(newEntry);
        evt.preventDefault();

    }
    render() {
        return (
            <div>
            <br />
            <Link className="btn gray" to="/">Back</Link>
                <h1>write</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="title" ref="title" />
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="input-field">
                    <input type="text" name="content" ref="content" />
                    <label htmlFor="title">Content</label>
                </div>
                <input type="submit" value="save" className="btn" />
                </form>
            </div>
        )
    }
}

export default WritePost; 