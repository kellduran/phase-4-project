import React from "react";
import { useState } from "react";


function Logout({ setCurrentUser }) {


    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => {
              if (res.ok) {
                setCurrentUser(null)
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