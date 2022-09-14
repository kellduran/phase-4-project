import React from "react";
import { useEffect, useState } from "react";


function PetSitters() {

    const [petSitters, setPetSitters]  = useState([])

    useEffect(() => {
        fetch("/pet_sitters")
          .then((r) => r.json())
          .then(setPetSitters);
      }, []);

    return(
        <div>
            <h1>This is the pet sitters page</h1>
            {petSitters.map((petSitter) => (
                <>
                    <h2> {petSitter.name} </h2>
                    <p>{petSitter.description} </p>
                    <img src={petSitter.image}></img>
                    <h3> Rating: {petSitter.rating} </h3>
                </>
            ))}
        </div>
        
    )
}

export default PetSitters;