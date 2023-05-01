import { useState } from "react";
import Layout from "./components/layout";
import Header from "./components/header";
import Link from "next/link";

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
    <>
      <Header title="Send Email" />
      <div className="container mx-auto px-4">
        <Link href="/adminDashboard" className="text-blue-500 underline mb-4 inline-block">
          Back to Admin Dashboard
        </Link>
        <h1 className="text-2xl font-bold">Send Email</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4 font-bold">
            <label htmlFor="email" className="block mb-2">
              Email Address:
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4 font-bold">
            <label htmlFor="body" className="block mb-2">
              Body:
            </label>
            <textarea
              id="body"
              value={body}
              onChange={handleBodyChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Send Email
          </button>
        </form>
      </div>
    </>
  );
  
}

export default Email;