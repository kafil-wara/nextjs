import { useState } from "react";
import Header from "./components/header";
import axios from "axios";
import Router from "next/router";
import router from "next/router";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

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
      const response = await axios.post('https://nestjs-production-8281.up.railway.app/admin/signup', { name, email, password, profilePicture })
      console.log("res: " + response.data)


      router.push('/login');

    } catch (error) {
      console.log("error22: " + error.message)
      setError("invalid signup")
    }
  }


  return (
    <>
    <Head>
      <title>SignUp</title>
    </Head>


      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm" >
          <Image
            className="mx-auto h-10 w-auto"
            src="/images/resize.png"
            alt="Your Company"
            width={200}
            height={200}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a New Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mt-2">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
              <input type="text" id="name" value={name} onChange={handleNameChange}
                required
                placeholder='   Name'
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  autoComplete="email"
                  required
                  placeholder='   Email'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  autoComplete="current-password"
                  required
                  placeholder='   Password'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password:</label>
              <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange}
                required
                placeholder='   Confirm Password'
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div>

              <div>
                <label htmlFor="profilePicture" className="block text-sm font-medium leading-6 text-gray-900">Profile Picture:</label>
                <input type="file" id="profilePicture" value={profilePicture} onChange={handleProfilePictureChange}
                  class="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-red-700
              hover:file:bg-violet-100"
                  required

                //className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Sign Up
              </button>
            </div>
            <Link href="/login" className="block text-sm font-medium leading-6 text-gray-900">Already have an account? Login</Link>
            {error &&
              <div>

                <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">{error}</span></p>
              </div>
            }
          </form>


        </div>
      </div>

    </>
  );
}

export default Signup;
