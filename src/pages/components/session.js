import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';

export default function Session() {
  const [email, setEmail] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined')// checks if the code is running on the client-side and not on the server-side.
    {
      const session = sessionStorage.getItem('email');
      if (session) {
        setEmail(sessionStorage.getItem('email', email));

      }
      else {
        router.push('/login');
      }
    }

  }, []);

  const handleSignOut = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('https://nestjs-production-8281.up.railway.app/admin/signout')
      console.log(response.data)
      sessionStorage.removeItem('email');
      setEmail(null);
      router.push('/login');
    } catch (error) {
      console.error(error)
    }

  };

  return null;
  // return (
  //   <>
  //     {email !== null ? (
  //       <>
  //         <div class="flex md:order-2">

  //           <a href="#" class="pr-3 pt-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">{email}</a>
  //           <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSignOut}>Sign out</button>

  //           <Link href="/adminDashboard" class="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">DashBoard</Link>


  //         </div>

  //       </>
  //     ) : (
  //       <div class="flex md:order-2">
  //         <Link href="/login"
  //           class="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  //         >
  //           Sign in
  //         </Link>

  //       </div>

  //     )}

  //   </>
  // );
}