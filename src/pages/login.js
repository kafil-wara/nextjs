import Header from './components/header';
import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Handle login logic
  }

  return (
    <>
    <Header title="Login"/>
    <a href='/'>Home</a>
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
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
