import React, { Component } from 'react';

import List from './List/index';



class ToDoList extends Component {
    state = {
        list: [],
        value:''

    }

    submitEditValue = (value, index) => {
        const {list} = this.state
        list[index].needEdit = false
        list[index].value = value
        this.setState({
            list: [...list]
        })

    }
    deleteItem = (index) =>{
        const {list} = this.state
        list.splice(index, 1)
        this.setState({
            list: list

        })
    }

    changeStatusForEdit = (index) => {
        const {list} = this.state
        list[index].needEdit = true
        this.setState({
            list: [...list]
        })
    }

    handleChange = (e) => this.setState({
        value: e.target.value});

    addElementToList = () =>{
        const {list, value} = this.state;
        if (value)
        {
            this.setState(
                {
                    list: [...list,

                        {
                            value: value,
                            needEdit: false
                        }
                    ],

                }

         )

        }
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

                >
                   Add Element
                </button>
                <List
                data = {list}
                deleteItem={this.deleteItem}
                editItem={this.changeStatusForEdit}
                submitEdit={this.submitEditValue}
                />
                </div>

        )
    }

}
        export default ToDoList;
