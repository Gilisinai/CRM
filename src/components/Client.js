import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import '../styles/client.css'
import Moment from 'react-moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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