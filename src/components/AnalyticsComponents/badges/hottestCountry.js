import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGlobeEurope } from '@fortawesome/free-solid-svg-icons'

@inject("clientsData")
@observer

class HottestCountry extends Component {

    
    
    render() {
        return (
            <div className="badge" >
               <FontAwesomeIcon icon={faGlobeEurope} />
               <h5>Hottest Country</h5>
               {this.props.clientsData.getHottestCountryName()}
            </div>
        )
    }
}

export default HottestCountry;