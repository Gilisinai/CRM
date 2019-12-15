import React, { Component } from 'react';
import Update from './ActionsComponents/Update'
import AddClient from './ActionsComponents/AddClient';

class Actions extends Component {


    
    render() {
        return (
            <div className="actions" >
                <Update/>
                <hr/>
                <AddClient/>
            </div>
        )
    }
}

export default Actions;