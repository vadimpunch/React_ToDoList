import React, { Component } from 'react';

class List extends Component{

    render() {
        const {data, deleteItem} = this.props;

        return(
                <div>
                    <ul>
                        {
                            data.map((item, index) => (
                                <li key={index}>{item}
                                <span
                                onClick={()=>deleteItem(index)}>
                                    DELETE
                                </span>
                                    </li>


                            ))
                        }

                    </ul>
                    <img src="../../../../icons/deleteElement.jpg" width="50px" height="50px" alt=""/>
                </div>

        )
    }
}







export default List;