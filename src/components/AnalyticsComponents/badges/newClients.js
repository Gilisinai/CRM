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
                <FontAwesomeIcon icon={faChartLine} />
                <h5>New Clients</h5>
              {this.props.clientsData.newClients}
            </div>
        )
    }
}

export default NewClients;