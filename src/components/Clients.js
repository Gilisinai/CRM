import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Client from './Client'
import '../styles/clients.css'
import Modal from '@material-ui/core/Modal';
import ReactPaginate from 'react-paginate';

@inject("clientsData")
@observer
class Clients extends Component {


    constructor() {
        super()
        this.state = {
            clients: [],
            searchFilter: "",
            selectedFilter: "name",
            pageNum: 1
        }
    }
    componentDidMount = async () => {
        await this.props.clientsData.getClientsData()
        this.setState({
            clients: this.props.clientsData.clients.slice((this.state.pageNum * 20) - 20, this.state.pageNum * 20)
        })

    }

    currentClients = () => this.state.clients.slice((this.state.pageNum * 20) - 20, this.state.pageNum * 20)

    render() {

        return (
            <div className="clients">
                <div className="title">
                    <div className="title-prop">First Name</div>
                    <div className="title-prop">Last Name</div>
                    <div className="title-prop">Country</div>
                    <div className="title-prop">First Contact</div>
                    <div className="title-prop">Email</div>
                    <div className="title-prop">Sold</div>
                    <div className="title-prop">Owner</div>

                </div>

                {this.props.clientsData.clients.map((c, i) => <div key={i}><Client client={c} /></div>)}
            </div>
        )
    }
}

export default Clients;