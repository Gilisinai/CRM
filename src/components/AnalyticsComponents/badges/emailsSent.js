import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons'
@inject("clientsData")
@observer

class EmailsSent extends Component {


    async componentDidMount() {
         await this.props.clientsData.getClientsData()
        
      }


    render() {
        return (
            <div className="badge" >
                <FontAwesomeIcon icon={faEnvelope} />
                <h5>Emails Sent</h5>
               {this.props.clientsData.numEmails}
            </div>
        )
    }
}

export default EmailsSent;