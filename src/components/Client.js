import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import '../styles/client.css'
import Moment from 'react-moment';

@inject("clientsData")
@observer
class Client extends Component {

    
    render() {
        let name = this.props.client.name.split(" ")
        let client = this.props.client
        
        return (
            <div className="client">
                <div className="client-prop">{name[0]}</div>
                <div className="client-prop">{name[1]}</div>
                <div className="client-prop">{client.country}</div>
                <div className="client-prop">{  <Moment format="YYYY/MM/DD">{client.first_contact}</Moment>}</div>
                <div className="client-prop">{client.emailType === "null" ? "-" : client.emailType }</div>
                <div className="client-prop">{client.sold ? "v" : "-"}</div>
                <div className="client-prop">{client.owner}</div>

            </div>
        )
    }
}

export default Client;