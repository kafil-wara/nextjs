import { useState } from "react";
import Layout from "./components/layout";
import Header from "./components/header";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

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
<Head>
        <title>All User</title>
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <div className="border-b-2 shadow-xl">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/">
                <Image src="/images/resize.png" alt="Logo" height={200} width={200} />
              </Link>
              {/* <a href="#" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600">TV Shows</a>
                    <a href="#" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600">Movies</a> */}
            </div>

            <div className="text-2xl font-bold text-gray-800">
              <Link href="/adminDashboard">Admin Dashboard</Link>
            </div>
            <div className="flex items-center">

            </div>
          </div>
          <div className="flex justify-end">
            <Link href="/" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600 ">Go To Main Site</Link>
          </div>
        </div> 
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
    </div>
    </>
  );
  
}

export default Email;