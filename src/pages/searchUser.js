import { useState } from "react";
import Header from "./components/header";
import Link from "next/link";
import axios from "axios";

function SearchUser() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://nestjs-production-8281.up.railway.app/admin/finduserbyname?name=${name}`);
    if (res.status === 200) {
      const data = await res.json();
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        setUsers([]);
      }
    } else {
      setUsers([]);
    }
  };

  return (
    <>
      <Header />
      <Link href="/adminDashboard" className="text-blue-500 underline mb-4 inline-block">
        Back to Admin Dashboard
      </Link>
      <div className="text-center mt-4">
        <form onSubmit={handleSubmit} className="inline-block">
          <label className="mr-2">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex justify-center">
        <div className="max-w-md">
          <div className="text-center">
            {users.length > 0 ? (
              <ul className="list-disc list-inside">
                {users.map((user) => (
                  <li key={user.id} className="mb-2">
                    <Link href={"/users/" + user.id} className="text-blue-500 underline">
                      {user.id} - {user.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No users found</p>
            )}
          </div>
        </div>
      </div>



    </>
  );
}

export default SearchUser;