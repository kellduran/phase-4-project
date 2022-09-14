import React, { useState } from "react";


function Signup({ setCurrentUser }) {


    const [formData, setFormData] = useState({
        username: "",
        password: "",
        name: "",
        address: ""
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
        
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    setCurrentUser(user)
                    refreshPage()
                });
            } else {
                res.json().then((errors) => {
                    console.error(errors);
                });
            }
        });
    }

    return(
        <div>
            <h1>Sign up page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" name="username" value={formData.username} onChange={handleChange}></input>
                <input type="password" placeholder="password" name="password" value={formData.password} onChange={handleChange}></input>
                <input type="password" placeholder="confirm password"></input>
                <input type="text" placeholder="name" name="name"value={formData.name} onChange={handleChange}></input>
                <input type="text" placeholder="address" name="address" value={formData.address} onChange={handleChange}></input>
                
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;