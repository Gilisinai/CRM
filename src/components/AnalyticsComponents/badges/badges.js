import React, { Component } from 'react';

import { observer, inject } from 'mobx-react'
import NewClients from './newClients';
import EmailsSent from './emailsSent';
import OutstandingClients from './outstandingClients';
import HottestCountry from './hottestCountry';
import '../../../styles/badges.css'

@inject("clientsData")
@observer

class Badges extends Component {

      
    
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