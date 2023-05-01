import Head from 'next/head';
import axios from 'axios';
import Header from './components/header';
import Link from 'next/link';
import AdminHeader from './components/adminHeader';

export default function GetUser({ users }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <AdminHeader title="All Users" />
      <div className="max-w-3xl mx-auto p-8">
        <a href="/adminDashboard" className="text-blue-500 underline mb-4 inline-block">
          Back to Admin Dashboard
        </a>
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
  );
}


export async function getServerSideProps() {
  const response = await axios.get('http://localhost:3000/admin/alluser');
  const users = await response.data;
  return { props: { users } }
}

