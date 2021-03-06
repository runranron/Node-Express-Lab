import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createPost } from '../../actions/';

class Create extends Component {
    state = {
        title: '',
        contents: '',
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit() {
        this.props.createPost(this.state);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Create</h1>
                <form onSubmit={() => this.handleSubmit()}>
                    <input name="title" onChange={this.handleChange.bind(this)}/>
                    <input name="contents" onChange={this.handleChange.bind(this)}/>
                    <button value="Submit">Submit New Post</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { createPost })(Create);