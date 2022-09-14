import React, { useState } from "react"; 


function Signup() {

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
        
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    setCurrentUser(user);
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
                <input type="text" placeholder="username" value={formData.username} onChange={handleChange}></input>
                <input type="text" placeholder="password" value={formData.password} onChange={handleChange}></input>
                <input type="text" placeholder="confirm password"></input>
                <input type="text" placeholder="name" value={formData.name} onChange={handleChange}></input>
                <input type="text" placeholder="address" value={formData.address} onChange={handleChange}></input>
                
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;