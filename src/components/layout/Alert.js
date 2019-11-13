import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'


const Alert = () => {
    const alertContext = useContext(AlertContext)
    return (
        alert !== null && (
            <div>{alertContext.msg}</div>
        )
    )
}

export default Alert
