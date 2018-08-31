import React, { Component } from 'react';

import EditValue from './componets/EditValue/index'

class List extends Component{

    render() {
        const {data, deleteItem, editItem, submitEdit} = this.props;

        return(
                <div>
                    <ul>
                        {
                            data.map((item, index) => {
                                if (item.needEdit) {
                                    return(
                                        <li
                                        key={index}>
                                            <EditValue
                                                value={item.value}
                                                submit={submitEdit}
                                                index={index}
                                            />
                                        </li>

                                    )
                                }
                                else
                                {
                                    return( <li key={index}>{item.value}
                                        <button
                                            onClick={() => deleteItem(index)}>
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => editItem(index)}>
                                            Edit
                                        </button>
                                    </li>)
                                }



                            })
                        }

                    </ul>

                </div>

        )
    }
}







export default List;