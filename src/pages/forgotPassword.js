import { useState } from "react";
import Link from "next/link";

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    
    async function handleSubmit(event) {
        event.preventDefault();
        try {
        setMessage('');
        setError('');
        setLoading(true);
        await forgotPassword(email);
        setMessage('Check your inbox for further instructions');
        } catch {
        setError('Failed to reset password');
        }
        setLoading(false);
    }
    
    return (
        <div>
        <h1>Forgot Password</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <button disabled={loading} type="submit">Reset Password</button>
        </form>
        <div>
            <Link href="/login">Login</Link>
        </div>
        </div>
    );
    }

export default ForgotPassword;