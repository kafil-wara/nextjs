// import { useState } from 'react';
// import axios from 'axios';

// const IndexPage = () => {
//   const [username, setUsername] = useState('');
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

//   const handleInputChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log("0");

//     try {
//       const response = await axios.get(`http://localhost:3000/admin/finduserbyname?name=${username}`);
//       console.log("1");
//       const data = await response.json();
//       setUser(data);
//       setError(null);
//     }
//      catch (err) {
//       console.error(err);
//       setUser(null);
//       console.log("2");

//       setError('Failed to find user.');
//     }
//   };

//   return (
//     <div>
//       <h1>Find User By Name</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={username} onChange={handleInputChange} />
//         <button type="submit">Search</button>
//       </form>
//       {error && <p>{error}</p>}
//       {user && (
//         <div>
//           <p>ID: {user.id}</p>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IndexPage;



import { useState } from "react";
import Header from "./components/header";
import Link from "next/link";
import axios from "axios";

function SearchUser() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/admin/finduserbyname?name=${name}`);
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
    <Header/>
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <Link href={"/users/" + user.id}>{user.id} - {user.name}</Link>                
              </li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
    </div>
    </>
  );
}

export default SearchUser;
