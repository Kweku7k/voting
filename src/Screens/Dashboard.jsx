import { faBoxOpen, faTable, faTruckLoading } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div style={{width:'100%'}}>

            <h6 className="text-muted" style={{margin:20, textAlign:'center'}}>DASHBOARD</h6>
            

            <div className="options">
                <Link style={{textDecoration:'none', color:'black'}} to="/orders">
                <div class="options-card">
                    <div className='ellipse' style={{backgroundColor:'greenyellow'}}>
                    <FontAwesomeIcon icon={faBoxOpen}/>
                    </div>
                    <h4><b>Orders</b></h4>
                </div>
                </Link>

                <Link style={{textDecoration:'none', color:'black'}} to="/products">

                <div class="options-card">
                    <div className='ellipse' style={{backgroundColor:'greenyellow'}}>
                    <FontAwesomeIcon icon={faTruckLoading}/>
                    </div>
                    <h4><b>Products</b></h4>
                </div>
                </Link>

            </div>
        </div>
    )
}

export default Dashboard
