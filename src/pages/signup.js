import { useState } from "react";
import Header from "./components/header";
import axios from "axios";
import Router from "next/router";

function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [error, setError] = useState('');


  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleProfilePictureChange(event) {
    setProfilePicture(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/admin/signup', { name ,email, password, profilePicture })
      console.log("res: "+response.data)
      
        
      router.push('/adminDashboard');

    } catch (error) {
        console.log("error22: "+error.message)
      setError("invalid signup")
    }
  }
  

    return (
      <>
      <Header title="Signup"/>
      
        <div>
          <a href="/">Home</a>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label htmlFor="profilePicture">Profile Picture:</label>
                    <input type="file" id="profilePicture" value={profilePicture} onChange={handleProfilePictureChange} />
                </div>
                <button type="submit">Signup</button>
            </form>
            <a href="/login">Already have an account? Login</a>
        </div>
        </>
    );
}

export default Signup;
