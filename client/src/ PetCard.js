import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PetCard({pet}){
    const { id } = pet

    function handleClick (){
        console.log(id)
    }
    return(
                <>
                    <h2> {pet.name} </h2>
                    <h2>{pet.animal} </h2>
                    <img src={pet.image}></img>
                    <h3> Size: {pet.size} </h3>
                    <h3> Age: {pet.age} </h3> 
                    <Link to={'/pets/${id}'}>
                        <button onClick={handleClick}>Update</button>
                    </Link>
                </>


    )
}

export default PetCard;