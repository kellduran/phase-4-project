import React from "react";


function MyAccount() {
    return(
        <div>
            <h1>This is the PetSitters Account</h1>
            <h2>Upload your animal</h2>
            <form>
                <input type="text" placeholder="Pet name"></input>
                <input type="text" placeholder="animal"></input>
                <input type="text" placeholder="breed"></input>
                <input type="text" placeholder="age"></input>
                <input type="text" placeholder="size"></input>
                <input type="text" placeholder="image"></input>
                <button>upload pet</button>
            </form>        
        </div>
    )
}

export default MyAccount;