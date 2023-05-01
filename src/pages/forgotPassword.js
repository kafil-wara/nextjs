import { useState } from "react";
import Link from "next/link";
import Header from "./components/header";
import Head from "next/head";
import Image from "next/image";

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
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
          <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
            <div className="flex justify-center mb-4">
              <Image src="/images/resize.png" alt="logo" width={100} height={100} />
            </div>
    
    
            <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
    
            
    
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-3">
                <label htmlFor="email" className="block mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
    
              <button
                disabled={loading}
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Reset Password
              </button>
            </form>
    
            <div>
              <Link href="/login" className="text-blue-500 underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      );
    }

export default ForgotPassword;