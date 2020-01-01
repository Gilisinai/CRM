import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/action.css'
@inject("clientsData", "inputHandler")
@observer

class AddClient extends Component {

    inputHandler = (e) => {
        this.props.inputHandler.handleInput(e.target.name, e.target.value)
    }

    addNewClient = () => {
        if (this.props.inputHandler.newClient === '' ||
            this.props.inputHandler.country === '' ||
            this.props.inputHandler.owner === '' ||
            this.props.inputHandler.email === ''){
                toast.error('All fieldes are required!', { containerId: 'A' });
            } else {
                this.props.clientsData.addClient(this.props.inputHandler.newClient, this.props.inputHandler.country, this.props.inputHandler.owner, this.props.inputHandler.email)
                toast.success('Client added successfully!', { containerId: 'A' });
            }
            
    }


    render() {
        let owners = this.props.clientsData.sortOwners()
        return (
            <div className="add-client-component action" >
                <h2>Add Client</h2>
                <div className="client-grid">
                <div className="field">  Full Name: </div>
                 <div>   
                    <input type="text" className="action-input" id="newClient" name="newClient"
                    onChange={this.inputHandler} value={this.props.inputHandler.newClient} />
                </div>

                <div className="field">  Country: </div>
                <div> 
                    <input type="text" className="action-input" id="newCountry" name="country"
                    onChange={this.inputHandler} value={this.props.inputHandler.country} />
                </div>
                <div className="field">  Owner: </div>
                <div> 
                    <input type="text" className="action-input" id="ownerrrr" name="owner" list="owners"
                    onChange={this.inputHandler} value={this.props.inputHandler.owner} />
                    <datalist id="owners"> {owners.map((c, i) => <option key={i} >{c.name}</option>)} </datalist>
                </div>
                <div className="field">  Email: </div>
                <div> 
                    <input type="text" className="action-input" id="email" name="email"
                    onChange={this.inputHandler} value={this.props.inputHandler.email} />
                </div>
                </div>
                <button onClick={this.addNewClient} className="action-button">Add New Client</button>
                
                <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_LEFT} />
            </div>
        )
    }
}

export default AddClient;