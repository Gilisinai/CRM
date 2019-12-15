import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/action.css'
@inject("clientsData", "inputHandler")
@observer

class Update extends Component {

    inputHandler = (e) => {
        this.props.inputHandler.handleInput(e.target.name, e.target.value)
    }

    transferOwner = () => {
        if(this.props.inputHandler.clientName === ''){
            toast('Please choose Client!', { containerId: 'A'  ,className: 'error'});
        }else if (this.props.inputHandler.owner === '') {
            toast('Please choose owner!', { containerId: 'A' ,className: 'error'});
        } else {
            this.props.clientsData.transferOwner(this.props.inputHandler.clientName, this.props.inputHandler.owner)
            toast('Client transfered !', { containerId: 'A' ,className: 'success'});
        }

    }

    sendEmail = () => {
        if (this.props.inputHandler.emailType === '') {
            toast('Please choose email type!', { containerId: 'A',className: 'error' });
        } else {
            this.props.clientsData.sendEmail(this.props.inputHandler.clientName, this.props.inputHandler.emailType)
            toast('Email sent !', { containerId: 'A' ,className: 'success'});
        }
    }

    declareSell = () => {
        if (this.props.inputHandler.clientName === '') {
            toast('Please choose client!', { containerId: 'A' ,className: 'error'});
        } else {
            this.props.clientsData.declareSell(this.props.inputHandler.clientName)
            toast('Sell declared !', { containerId: 'A' ,className: 'success'});
        }
    }



    render() {
        let owners = this.props.clientsData.sortOwners(this.props.inputHandler.clientName)
        return (
            <div className="update-component" >
                <h2> Update </h2>
                <div>
                    <div>  Client: <input type="text" id="clientName" name="clientName" list="client"
                        onChange={this.inputHandler} value={this.props.inputHandler.clientName} />
                        <datalist id="client"> {this.props.clientsData.clients.map((c, i) => <option key={i} >{c.name}</option>)} </datalist>


                    </div>
                    <div>  Owner: <input type="text" id="ownerrrr" name="owner" list="owners"
                        onChange={this.inputHandler} value={this.props.inputHandler.owner} />
                        <datalist id="owners"> {owners.map((c, i) => <option key={i} >{c.name}</option>)} </datalist>
                        <button onClick={this.transferOwner}>Transfer</button>
                    </div>
                    <div>     Send Email: <input type="text" id="emailTypes" name="emailType" list="emailType"
                        onChange={this.inputHandler} value={this.props.inputHandler.emailType} />
                        <datalist id="emailType">
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                        </datalist>
                        <button onClick={this.sendEmail}>Send</button>
                    </div>
                    <div>      Declare Sale! <button onClick={this.declareSell}>Declare Sell!</button> </div>
                </div>
                <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_LEFT} />
            </div>
        )
    }
}

export default Update;