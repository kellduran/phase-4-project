import React, { useState, useEffect } from "react";


function MyAccount({currentUser}) {
    const [pets, setPets]  = useState([])

    useEffect(() => {
        fetch(`/pets/${currentUser.id}`)
          .then((r) => r.json())
          .then(setPets);
      }, [pets]);

      const [formData, setFormData] = useState({
        name: "",
        animal: "Dog",
        breed: "",
        age: "",
        size: "",
        pet_owner_id: `${currentUser.id}`,
        image: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    };

    

    function handleSubmit(e) {
        e.preventDefault();

        const userCreds = { ...formData };
        console.log(userCreds)

        function refreshPage() {
            window.location.reload(true);
          }
        
        fetch("/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        }).then((res) => {
            if (res.ok) {
                res.json().then(() => {
                    setPets({
                        ...pets, userCreds
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
            <h1>This is the PetSitters Account</h1>
           
            { pets.map((pet) => (
                <>
                    <h2> {pet.name} </h2>
                    <h2>{pet.animal} </h2>
                    <img src={pet.image}></img>
                    <h3> Size: {pet.size} </h3>
                    <h3> Age: {pet.age} </h3> 
                </>
                ))    
            }
        
            <h2>Upload your animal</h2>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Pet name" name="name" value={formData.name} onChange={handleChange}></input>
                <input type="text" placeholder="breed" name="breed" value={formData.breed} onChange={handleChange}></input>
                <input type="text" placeholder="age" name="age" value={formData.age} onChange={handleChange}></input>
                <input type="text" placeholder="size" name="size" value={formData.size} onChange={handleChange}></input>
                <input type="text" placeholder="image" name="image" value={formData.image} onChange={handleChange}></input>
                <button>upload pet</button>
            </form>        
        </div>
    )
}

export default MyAccount;