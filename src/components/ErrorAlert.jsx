import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ErrorAlert = ({message}) => {
    return (
        <div className="errorAlert">
            <h6 style={{marginBottom:0}}>{message}</h6>
            <FontAwesomeIcon icon={faWindowClose}/>
        </div>
    )
}

export default ErrorAlert
