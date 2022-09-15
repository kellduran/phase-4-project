import React from "react";
import { useState } from "react";
import {useHistory} from 'react-router-dom'


function Logout({ setCurrentUser, setIsAuthenticated }) {

    const history = useHistory()


    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => {
              if (res.ok) {
                setCurrentUser("")
                setIsAuthenticated(false)
                history.push('/logout')
              }
            })
      }

    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout;