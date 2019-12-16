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
                <div className="outstanding icon">
                <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className="badge-title">
                <h5>Outstanding Clients</h5>
                </div>
                <div className="badge-num">
               {this.props.clientsData.outstandingClients}
               </div>
            </div>
            
        )
    }
}

export default OutstandingClients;