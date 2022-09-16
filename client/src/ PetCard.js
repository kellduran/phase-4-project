import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PetCard({pet, currentUser}){

    const { id } = pet


    const [petId, setPetId] = useState(`${id}`)

    function handleClick (){
        console.log(id)
        setPetId(id)

    }

    const [formData, setFormData] = useState({
        name: `${pet.name}`,
        animal: `${pet.animal}`,
        breed: `${pet.breed}`,
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


    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/pets/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(res => res.json())
        .then(data => console.log(data))
        


    }


    function handleDelete(){
        console.log("hello")
    }
        



    return(
                <>
                    <h2> {pet.name} </h2>
                    <h2>{pet.animal} </h2>
                    <img src={pet.image}></img>
                    <h3> Size: {pet.size} </h3>
                    <h3> Age: {pet.age} </h3>
                    <br />
                    <h2>Update your Pet</h2>
                    <form onSubmit={ handleSubmit }>
                        <input type="text" placeholder="age" name="age" value={formData.age} onChange={handleChange}></input>
                        <input type="text" placeholder="size" name="size" value={formData.size} onChange={handleChange}></input>
                        <input type="text" placeholder="image" name="image" value={formData.image} onChange={handleChange}></input>
                        <button>update pet</button>
                    </form>
                    <button onClick={ handleDelete }>Delete Pet</button>


                    {/* <Link to={'/pets/${id}'}>
                        <button onClick={handleClick}>Update</button>
                    </Link> */}
                    {/* <button onClick={checking}>check</button> */}
                </>


    )
}

export default PetCard;