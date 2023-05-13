import Head from 'next/head';
import axios from 'axios';
import Header from './components/header';
import Link from 'next/link';
import AdminHeader from './components/adminHeader';
import Image from 'next/image';

export default function GetUser({ users }) {
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
        <div className="max-w-3xl mx-auto p-8">
          <Link href="/adminDashboard" className="text-blue-500 underline mb-4 inline-block">
            Back to Admin Dashboard
          </Link>
          <h1 className="text-2xl font-bold mb-4">User List</h1>
          <div className='text-blue-500 underline mb-4 inline-block font-bold'>
            <Link href="/searchUser"> Search User</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {users.map((user) => (
              <div key={user.id} className="bg-white shadow-md rounded-lg p-4">
                <Link href={"/users/" + user.id} className="text-blue-500 hover:underline">
                  {user.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


export async function getServerSideProps() {
  const response = await axios.get('https://nestjs-production-8281.up.railway.app/admin/alluser');
  const users = await response.data;
  return { props: { users } }
}

