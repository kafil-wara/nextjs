import { useState } from "react";

function Email() {
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleBodyChange(event) {
    setBody(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

    return (
        <div>
          <a href="/adminDashboard">Back to Admin Dashboard</a>
            <h1>Send Email</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="text" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label htmlFor="body">Body:</label>
                    <input type="text" id="body" value={body} onChange={handleBodyChange} />
                </div>
                <button type="submit">Send Email</button>
            </form>
        </div>
    );
}

export default Email;