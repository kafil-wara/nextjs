import React, { useState } from 'react';
import axios from 'axios';

export default function UserLayout({ user }) {
  const [isBlocked, setIsBlocked] = useState(String(user.isblocked));

  const handleBlockUser = () => {
    const status = isBlocked === "true" ? "false" : "true";
    // Make API request to block/unblock the user
    axios
      .put('http://localhost:3000/admin/blockuser', { id: user.id, status })
      .then(response => {
        // Handle successful response
        console.log('User blocked/unblocked successfully:', response.data);
        setIsBlocked(status); // Update the block status in the state
        alert(`User has been ${status === "true" ? "blocked" : "unblocked"} successfully!`);
      })
      .catch(error => {
        // Handle error
        console.error('Error blocking/unblocking user:', error);
        alert('An error occurred while blocking/unblocking the user. Please try again later.');
      });
  };
  

  return (
  <div className="bg-gray-100 min-h-screen flex justify-center items-center">
    <div className="max-w-3xl mx-auto p-8">
      <a href="/allUser" className="text-blue-500 underline mb-4 inline-block">
        Back to User List
      </a>
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
            <td className="py-2">{isBlocked}</td>
          </tr>
        </tbody>
      </table>
      <button
        className={`mt-4 py-2 px-4 rounded border-2 border-gray-300 ${
          isBlocked === "true" ? "bg-red-500 text-white-500" : "bg-green-500 text-white-500"
        }`}
        onClick={handleBlockUser}
      >
        {isBlocked === "true" ? "Unblock User" : "Block User"}
      </button>
    </div>
  </div>
);

}
