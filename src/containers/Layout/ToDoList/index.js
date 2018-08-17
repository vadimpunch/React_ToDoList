import React, { Component } from 'react';

import List from './List/index';



class ToDoList extends Component {
    state = {
        value: '',
        list: []
    }
    deleteItem = (index) =>{
        const {list} = this.state
        list.splice(index, 1)
        this.setState({
            list: list

        })
    }
    handleChange = (e) => this.setState({value: e.target.value});
    addElementToList = () =>{
        const {list, value} = this.state;
        this.setState(
            {list: [...list, value]}
        )
    }

    render() {
        const {list} = this.state;
        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.addElementToList}
                    className={"Prikol"}
                >
                   Add Element
                </button>
                <List
                data = {list}
                deleteItem={this.deleteItem}
                />
                </div>

        )
    }

}
        export default ToDoList;
