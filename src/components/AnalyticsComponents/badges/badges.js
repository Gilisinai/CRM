import React, { Component } from 'react';

import { observer, inject } from 'mobx-react'
import NewClients from './newClients';
import EmailsSent from './emailsSent';
import OutstandingClients from './outstandingClients';
import HottestCountry from './hottestCountry';

@inject("clientsData")
@observer

class Badges extends Component {

    // componentDidMount =() =>{
    //     this.props.clientsData.getClients()
    // }

    
    
    
    render() {
        return (
            <div className="badges" >
               <NewClients />
                <EmailsSent/>

                <OutstandingClients/>
               <HottestCountry/> 
            </div>
        )
    }
}

export default Badges;