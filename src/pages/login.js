import Header from './components/header';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';
import Head from 'next/head';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
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
      const response = await axios.post('https://nestjs-production-8281.up.railway.app/admin/signin', { email, password })
      //console.log("res: "+response)
      //console.log("res: "+response.data.email)

      if (response.data.authenticated == true) {
        sessionStorage.setItem('email', email);
        if (sessionStorage.getItem('email') == "admin@bdflix.com") {
          router.push('/adminDashboard');
        }
        else{
          router.push('/');
        }
        
        //setIsLoggedIn(true);
        //localStorage.setItem('isLoggedIn', 'true');
      }
      else {
        setError("invalid login")
        console.log("invalid credentials")
        return 0;
      }


    } catch (error) {
      console.log("error22: " + error.message)
      setError("invalid login")
    }
  }

  return (
    <>
    <Head>
      <title>Login</title>
    </Head>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm" >
          <Link href="/">
            <Image
              className="mx-auto h-10 w-auto"
              src="/images/resize.png"
              alt="Your Company"
              height={200}
              width={200}
            />
          </Link>
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                <div className="text-sm">
                  <Link href="/forgotPassword" className="font-semibold text-red-600 hover:text-pink-500">
                    Forgot password?
                  </Link>
                </div>
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

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            {error &&
              <div>

                <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">{error}</span></p>
              </div>
            }
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link href="/signup" className="font-semibold leading-6 text-red-600 hover:text-red-500">
              Sign Up Now!
            </Link>
          </p>
        </div>
      </div>

    </>


  );
}

export default Login;

