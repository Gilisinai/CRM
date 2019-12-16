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
            <div className="add-client-component" >
                <h2>Add Client</h2>
                <div>  Full Name: <input type="text" id="newClient" name="newClient"
                    onChange={this.inputHandler} value={this.props.inputHandler.newClient} />
                </div>

                <div>  Country: <input type="text" id="newCountry" name="country"
                    onChange={this.inputHandler} value={this.props.inputHandler.country} />
                </div>
                <div>  Owner: <input type="text" id="ownerrrr" name="owner" list="owners"
                    onChange={this.inputHandler} value={this.props.inputHandler.owner} />
                    <datalist id="owners"> {owners.map((c, i) => <option key={i} >{c.name}</option>)} </datalist>
                </div>
                <div>  Email: <input type="text" id="email" name="email"
                    onChange={this.inputHandler} value={this.props.inputHandler.email} />
                </div>
                <button onClick={this.addNewClient}>Add New Client</button>
                <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_LEFT} />
            </div>
        )
    }
}

export default AddClient;