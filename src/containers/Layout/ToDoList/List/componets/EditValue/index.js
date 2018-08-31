import React, {Component} from 'react';


class EditValue extends Component{
    componentWillMount(){
        this.setState({
            editValue: this.props.value
        })

    }
    handleChangeValue = (e) => {

        this.setState({editValue: e.target.value})
    }
    state = {
        editValue: ''
    }

    submitChanges = () => {
        const {submit, index} = this.props
        submit(this.state.editValue, index)
    }

    render(){

        return(
            <div>
                <input
                    type="text"
                    value={this.state.editValue}
                    onChange={this.handleChangeValue}
                />
                <button
                onClick={this.submitChanges}
                >
                    Submit
                </button>
            </div>
        )
    }
}

export default EditValue;