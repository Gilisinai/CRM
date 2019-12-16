import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChartLine } from '@fortawesome/free-solid-svg-icons'

@inject("clientsData")
@observer
class NewClients extends Component {

    
    
    
    render() {
        
        
        return (
            <div className="badge" >
                <div className="new icon">
                <FontAwesomeIcon icon={faChartLine} />
                </div>
                <div className="badge-title">
                <h5>New Clients</h5>
                </div>
                <div className="badge-num">
               {this.props.clientsData.newClients}
               </div>
            </div>
            
        )
    }
}

export default NewClients;