import React, { useState } from "react";

function UpdatePet( { currentUser } ){
    const [formData, setFormData] = useState({
        name: "",
        animal: "",
        breed: "",
        age: "",
        size: "",
        pet_owner_id: `${currentUser.id}`,
        image: ""
    });

    function handleChange(e){
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }


    function handleSubmit(e){
       e.preventDefault()
       console.log(formData.name)

    }

    function petId() {
        console.log("hello")
    }
    
    
    return(
        <div>
            <h2>Update your Pet</h2>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Pet name" name="name" value={formData.name} onChange={handleChange}></input>
                <input type="text" placeholder="breed" name="breed" value={formData.breed} onChange={handleChange}></input>
                <input type="text" placeholder="age" name="age" value={formData.age} onChange={handleChange}></input>
                <input type="text" placeholder="size" name="size" value={formData.size} onChange={handleChange}></input>
                <input type="text" placeholder="image" name="image" value={formData.image} onChange={handleChange}></input>
                <button>update pet</button>
                <button onClick={petId}>show pet id</button>
            </form>        
        </div>
    )
}

export default UpdatePet;