import React, { Component } from 'react';
import './styles.css';

class Header extends Component {
    state = {
        main: 'header'
    }
    render() {
        const {main} = this.state;
        return (
            <header>
                Hello, i`m {main}!
            </header>
        )
    }
}

export default Header;