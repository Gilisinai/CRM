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
                <div className="hottest icon">
                <FontAwesomeIcon icon={faGlobeEurope} />
                </div>
                <div className="badge-title">
                <h5>Hottest Country</h5>
                </div>
                <div className="badge-num">
               {this.props.clientsData.getHottestCountryName()}
               </div>
            </div>
            
        )
    }
}

export default HottestCountry;