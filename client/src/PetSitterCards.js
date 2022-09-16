import React, {useState, useEffect} from "react";
import PetSitters from "./PetSitters";


function PetSitterCards({currentUser, petSitter}) {


    // const [appts, setAppts] = useState([])


    console.log(currentUser)

    console.log(petSitter)

    const [apptData, setApptData] = useState({
        date: "",
        service: "",
        time: "",
        pet_name: "",
        pet_owner_id: `${currentUser.id}`,
        pet_sitter_id: `${petSitter.id}`
    });
    
    
    function handleAppointmentChange(e) {
        setApptData({
            ...apptData, [e.target.name]: e.target.value,
        });
    }


    function handleSubmit(e) {
        e.preventDefault();

        const userCreds = { ...apptData };
        console.log(userCreds)

        function refreshPage() {
            window.location.reload(true);
          }
        
        fetch("/appointments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        }).then((res) => {
            if (res.ok) {
                res.json().then(() => {
                    setApptData({
                        ...apptData, userCreds
                    })
            }).then(refreshPage()); 
            } else {
                res.json().then((errors) => {
                    console.error(errors);
                });
            }
        });
    }
   
    return(
        <div>
            <div key={petSitter.id}>
            <h2> {petSitter.name} </h2>
            <p>{petSitter.description} </p>
            <img src={petSitter.image}></img>
            <h3> Rating: {petSitter.rating} </h3>
            <br />
            <h1>Book me for an appointment</h1>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="service" name="service" value={apptData.service} onChange={handleAppointmentChange}></input>
                <input type="text" placeholder="pet" name="pet_name" value={apptData.pet_name} onChange={handleAppointmentChange}></input>
                <button>Book Me for an Appointment</button>
            </form>


            </div>

            









        </div>
    )
}

export default PetSitterCards;