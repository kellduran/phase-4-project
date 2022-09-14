import React from "react";


function Home() {
    return(
        <div>
            <h1>This is the Home</h1>
            <form>
                <div>Boarding</div>
                <div>House Sitting</div>
                <div>Drop-in Visits</div>
                <div>Doggy Day Care</div>
                <div>Dog Walking</div>
                <input type="text" placeholder="enter zip code"></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Home;