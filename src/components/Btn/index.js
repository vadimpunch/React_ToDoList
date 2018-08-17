import React, { Component } from 'react'


class Btn extends Component {

    state = {
        btnMessage: "Click me plz"
}
    handleClick = () => {
        this.setState({btnMessage:'Clicked'})
    }

    render() {
        const {btnMessage} = this.state
       

        return(
            <button onClick={this.handleClick}>
                {btnMessage}
            </button>
        )
    }

}
export default Btn;