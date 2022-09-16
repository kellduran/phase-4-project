import React from "react";
import { useEffect, useState } from "react";
import PetSitterCards from "./PetSitterCards";


function PetSitters({currentUser}) {

    const [petSitters, setPetSitters]  = useState([])

    useEffect(() => {
        fetch("/pet_sitters")
          .then((r) => r.json())
          .then(setPetSitters);
      }, []);


      const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
        rating: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();

        const userCreds = { ...formData };

        function refreshPage() {
            window.location.reload(true);
          }
        
        fetch("/pet_sitters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        }).then(res => res.json())
        .then(data => console.log(data))
        .then(refreshPage())
    }

    function handleClick(){
        console.log("hello")


    }

    const [apptData, setApptData] = useState({
        date: "",
        service: "",
        time: "",
        pet_name: "",
        pet_owner_id: "",
        pet_sitter_id: ""
    });
    
    
    function handleAppointmentChange(e) {
        setApptData({
            ...apptData, [e.target.name]: e.target.value,
        });
    }


  
    const diplayPetSitters = petSitters.map((petSitter) => {
        return(
            <PetSitterCards 
            key = {petSitter.id}
            currentUser= {currentUser}
            petSitter = {petSitter}
            />


        )
    })




    return(
        <div>
            <h1>This is the pet sitters page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" name="name" value={formData.name} onChange={handleChange}></input>
                <input type="text" placeholder="description" name="description" value={formData.description} onChange={handleChange}></input>
                <input type="text" placeholder="image" name="image" value={formData.image} onChange={handleChange}></input>
                
                <button>Become a Pet Sitter</button>
            </form>

            {/* <PetSitterCards currentUser= {currentUser}/> */}

            {diplayPetSitters}
            
        </div>
        
    )
}

export default PetSitters;