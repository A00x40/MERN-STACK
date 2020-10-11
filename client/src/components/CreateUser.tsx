import React, { ChangeEvent, Component, FormEvent } from 'react'
import axios from 'axios';

interface IUser {
    username: string
}

export default class CreateUser extends Component<any , IUser> {
    constructor(props:any)
    {
        super(props);
        this.state = {
            username: ''
        }
    }

    onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user: IUser = {
            username: this.state.username
        }

        axios.post('http://127.0.0.1:5000/users/add' , user)
            .then(res => console.log(res.data))
            .catch(res => console.log(res.data));

        this.setState({
            username:""
        })
    }

    render() {
        return (
            <div className="container">
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Username: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
                </form>
            </div>
        );
    }
}
