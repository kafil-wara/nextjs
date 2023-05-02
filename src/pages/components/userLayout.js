import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

function UserLayout({ user }) {
  const [isBlocked, setIsBlocked] = useState(user?.isblocked || false);
  // const id = user.id;
  const router = useRouter();
  const { id } = router.query;
   //console.log(id + "?");
 

  //let url = "https://nestjs-production-8281.up.railway.app/admin/deleteuser?id=" + id;
  //console.log(url);
  
  const handleDeleteUser = () => {
    //console.log("GG" + id);
    //console.log(url);
    try {
      //alert(`Are you sure you want to delete user ${id}`)
      axios.delete(`https://nestjs-production-8281.up.railway.app/admin/deleteuser?id=${id}`)
      alert(`User ${id} has been deleted`)
      console.log("User deleted successfully!");
      router.push('/allUser');
    }
    catch(error) {  
      console.error("Error deleting user: ", error);
    }
  };

  const handleBlockUser = () => {
    const status = isBlocked ? false : true;
    // Make API request to block/unblock the user
    axios
      .put('https://nestjs-production-8281.up.railway.app/admin/blockuser', { id: user?.id, status })
      .then(response => {
        // Handle successful response
        console.log('User blocked/unblocked successfully:', response.data);
        setIsBlocked(status); // Update the block status in the state
        alert(`User has been ${status ? 'blocked' : 'unblocked'} successfully!`);
      })
      .catch(error => {
        // Handle error
        console.error('Error blocking/unblocking user:', error);
        alert('An error occurred while blocking/unblocking the user. Please try again later.');
      });
  };


  if (!user) {
    // Handle the case when the user object is undefined or null
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-3xl mx-auto p-8">
        <Link href="/allUser" className="text-blue-500 underline mb-4 inline-block">
          Back to User List
        </Link>
        <table className="mx-auto">
          <tbody>
            <tr>
              <td className="font-bold py-2">User ID:</td>
              <td className="py-2">{user.id}</td>
            </tr>
            <tr>
              <td className="font-bold py-2">Name:</td>
              <td className="py-2">{user.name}</td>
            </tr>
            <tr>
              <td className="font-bold py-2">Email:</td>
              <td className="py-2">{user.email}</td>
            </tr>
            <tr>
              <td className="font-bold py-2">Block Status:</td>
              <td className="py-2">{isBlocked.toString()}</td>
            </tr>
          </tbody>
        </table>
        <button
          className={`mt-4 py-2 px-4 rounded border-2 border-gray-300 ${isBlocked ? 'bg-red-500 text-white-500' : 'bg-green-500 text-white-500'
            }`}
          onClick={handleBlockUser}
        >
          {isBlocked ? 'Unblock User' : 'Block User'}
        </button>
        <button onClick={handleDeleteUser} className='mt-4 py-2 px-4 rounded border-2 border-gray-300 bg-red-500 text-white-500'>
            Delete User
        </button>
      </div>
    </div>
  );
}


export default UserLayout;
