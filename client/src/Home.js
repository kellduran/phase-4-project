import React from "react";
import CenterHome from "./Styles/PageGrid.Style"


function Home() {
    return(
        <div>
            <h1>This is the Home</h1>
                <CenterHome>
                    <form>
                        <div>Boarding</div>
                        <div>House Sitting</div>
                        <div>Drop-in Visits</div>
                        <div>Doggy Day Care</div>
                        <div>Dog Walking</div>
                        <input type="text" placeholder="enter zip code"></input>
                        <button>Search</button>
                    </form>
                </CenterHome>
        </div>
    )
}

export default Home;