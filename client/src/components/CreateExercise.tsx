import React, { ChangeEvent, Component, FormEvent } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface IExercise  {
    username: string; 
    description: string;
    duration: Number;
    date: Date;
    users?: string[];
}

export default class CreateExercise extends Component<any , IExercise> {
    constructor(props:any)
    {
        super(props);
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount()
    {
        this.setState( {
            users:['test user'],
            username: 'test user'
        });
    }

    onNameChange = ( e: ChangeEvent<HTMLSelectElement> ) => {
        this.setState({
            username: e.target.value
        });

    }

    onDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value)
        {
            this.setState({
                duration: Number(e.target.value)
            });
        }
        else
        {
            this.setState({
                duration: 0
            });
        }
    }

    onDateChange = (e: Date) => {
        this.setState({
            date: e
        });

    }

    onDataChange = (e: ChangeEvent<HTMLInputElement>) =>{
        
        let name =  e.target.name;
        let value = e.target.value;
        
        this.setState(  state => ({
             ...state,
             [name]: value , 
        }));
        console.log(this.state);
    }

    onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const exercise: IExercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        }

        axios.post('http://localhost:5000/exercises/add' , exercise)
            .then(res => console.log(res.data));
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            name="Username"
                            value={this.state.username}
                            onChange={this.onNameChange}>
                            {
                                this.state.users!.map(function(user) {
                                return <option 
                                    key={user}
                                    value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                            required
                            name="description"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onDataChange}
                            />
                    </div>

                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.duration.toString()}
                            onChange={this.onDurationChange}
                            />
                    </div>

                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                            selected={this.state.date}
                            onChange={this.onDateChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        );
    }
}
