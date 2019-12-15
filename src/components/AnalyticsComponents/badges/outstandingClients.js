import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUsers } from '@fortawesome/free-solid-svg-icons'

@inject("clientsData")
@observer

class OutstandingClients extends Component {


    
    render() {
        return (
            <div className="badge" >
                 
                <FontAwesomeIcon icon={faUsers} />
                <h5>Outstanding Clients</h5>
                {this.props.clientsData.outstandingClients}
            </div>
        )
    }
}

export default OutstandingClients;