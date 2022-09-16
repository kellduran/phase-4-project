
import React, { useState, useEffect } from "react";
import PetCard from "./ PetCard";
import BackgroundStyle from "./styled-comps/BackgroundStyle";
import StyledButton from "./styled-comps/StyledButton"
import StyledForm from "./styled-comps/StyledForm"
import TitleStyle from "./styled-comps/TitleStyle"


function MyAccount({currentUser, appts}) {
    const [pets, setPets]  = useState([])

    const [userAppts, setUserAppts] = useState([])

    console.log(pets)

    function refreshPage() {
        window.location.reload(true);
      }


    useEffect(() => {
        fetch(`/pets/${currentUser.id}`)
          .then((r) => {
            if (r.ok) {
                r.json().then((data) => {setPets(data)})
            }
          })
      }, []);

      useEffect(() => {
        fetch(`/appointments/${currentUser.id}`)
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => setUserAppts(data))
            }
        })
      }, [currentUser]);

      
      const displayPets = pets.map((pet) =>{
        return(
            <PetCard
            key = {pet.id}
            pet = {pet}
            currentUser= {currentUser}
            />
        )
      })

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

        // function refreshPage() {
        //     window.location.reload(true);
        //   }
        
        fetch("/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        }).then((res) => {
            if (res.ok) {
                res.json().then(() => {
                    setPets([
                        ...pets, userCreds
                    ])
            }).then(); 
            } else {
                res.json().then((errors) => {
                    console.error(errors);
                });
            }
        });
    }


    function refreshPage() {
        window.location.reload(true);
      }

    function handleClick() {

        return( 
        console.log(userAppts)

        
        )
    }


    console.log(userAppts)
    return(
        <BackgroundStyle>
            <h1>This is the PetSitters Account</h1>
            {displayPets}   
            {appts}
            <button onClick={handleClick}>Show appts</button>
            {userAppts.map((userAppt) => (
                <div>
                    <div>id: {userAppt.id}</div>
                    <div>service: {userAppt.service}</div>
                    <div>pet name: {userAppt.pet_name}</div>
                </div>
            ))}        
            {/* { pets.map((pet) => (

                // <>
                //     <h2> {pet.name} </h2>
                //     <h2>{pet.animal} </h2>
                //     <img src={pet.image}></img>
                //     <h3> Size: {pet.size} </h3>
                //     <h3> Age: {pet.age} </h3> 
                //     <button onClick={ handleClick } >Update</button>
                // </>
                ))    
            } */}
        
            
            <StyledForm onSubmit={ handleSubmit }><TitleStyle>Upload your animal</TitleStyle>
                <StyledForm.HomeInput type="text" placeholder="Pet name" name="name" value={formData.name} onChange={handleChange}></StyledForm.HomeInput>
                <StyledForm.HomeInput type="text" placeholder="breed" name="breed" value={formData.breed} onChange={handleChange}></StyledForm.HomeInput>
                <StyledForm.HomeInput type="text" placeholder="age" name="age" value={formData.age} onChange={handleChange}></StyledForm.HomeInput>
                <StyledForm.HomeInput type="text" placeholder="size" name="size" value={formData.size} onChange={handleChange}></StyledForm.HomeInput>
                <StyledForm.HomeInput type="text" placeholder="image" name="image" value={formData.image} onChange={handleChange}></StyledForm.HomeInput>
                <StyledButton>upload pet</StyledButton>
            </StyledForm>        
        </BackgroundStyle>

    )
}

export default MyAccount;