import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SuccessAlert = ({message}) => {
    return (
        <div className="successAlert">
            <h6 style={{marginBottom:0}}>{message}</h6>
            <FontAwesomeIcon icon={faWindowClose}/>
        </div>
    )
}

export default SuccessAlert
