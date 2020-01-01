import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Client from './Client'
import '../styles/clients.css'
import PageButton from './PageButton'

@inject("clientsData")
@observer
class Clients extends Component {


    constructor() {
        super()
        this.state = {
            clients: [],
            pageNum: 1,
            numButtons: []
        }
    }
    componentDidMount = async () => {
        
        await this.props.clientsData.getClientsData()
        await this.generatePageButtons()
        this.setState({
            clients: this.props.clientsData.clients
        })

    }

    currentClients = () => {

        return this.state.clients.slice((this.state.pageNum * 20) - 20, this.state.pageNum * 20)



    }
    pageUp = () => {
        if (this.state.pageNum * 20 > this.state.clients.length) { return }

        let pageNum = this.state.pageNum + 1
        this.setState({ pageNum })
    }

    generatePageButtons = () => {
        console.log(this.props.clientsData.clients.length)
        let numButtonsByLength = Math.floor(this.props.clientsData.clients.length / 20)
        
        let numButtons = []
        for (let i = 0; i < numButtonsByLength; i++) {
            numButtons.push(i)
            console.log(i)
        }
        this.setState({
            numButtons
        })
        console.log(this.state.numButtons)
        
    }

    pageDown = () => {
        if (this.state.pageNum === 1) { return }

        let pageNum = this.state.pageNum - 1
        this.setState({ pageNum })
    }

    showCurrentClientNum = () => {

        let topNum = this.state.pageNum * 20
        let lowNum = topNum - 19

        return (
            <div id="pagination">
                <button className="page-move" onClick={this.pageDown}>{"<"}</button>
        <div className="display-page" > 
        {lowNum} - {this.state.pageNum * 20 > this.state.clients.length && this.state.clients.length ? 'END' : topNum}
        </div>
                <button className="page-move" onClick={this.pageUp}> {">"} </button>
            </div>
        )
    }

    render() {

        return (
            <div className="clients">
                <div className="title  sticky">
                    <div className="title-prop">First Name</div>
                    <div className="title-prop">Last Name</div>
                    <div className="title-prop">Country</div>
                    <div className="title-prop">First Contact</div>
                    <div className="title-prop">Email</div>
                    <div className="title-prop">Sold</div>
                    <div className="title-prop">Owner</div>

                </div>

                {this.currentClients().map((c, i) => <div key={i}><Client client={c} /></div>)}
                {this.showCurrentClientNum()}
                {this.state.numButtons.map((c, i) => <PageButton key={i} num={c}/>) }
            </div>
        )
    }
}

export default Clients;