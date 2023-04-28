import Header from './components/header';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router =useRouter();
  const [error, setError] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/admin/signin', { email, password })
      console.log("res: "+response.data)
      console.log("res: "+response.data.email)
      //console.log()
      
        sessionStorage.setItem('email', response.data);
        router.push('/adminDashboard');

    } catch (error) {
        console.log("error22: "+error.message)
      setError("invalid login")
    }
  }

  return (
    <>
    <Header title="Login"/>
    <a href='/'>Home</a>
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
        <a href='/forgotPassword'>Forgot Password?</a>
        <br></br>
        <a href="/signup">Join Us!</a>        
      </form>
    </div>
    </>
  );
}

export default Login;
