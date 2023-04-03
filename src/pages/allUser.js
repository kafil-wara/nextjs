// import { useState } from 'react';
// import { useEffect } from 'react';
// //import Alert from 'react-bootstrap/Alert';
// //display all users from a json file in a table
// // use require to import the json file
// // table headers should be name, id, email, isBlocked

// //write the getAllUsers function

// function getAllUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const users = require('db/allUser.json');
//       resolve(users);
//     }, 1000);
//   });
// }

// function AllUser() {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setError('');
//         setLoading(true);
//         const users = await getAllUsers();
//         setUsers(users);
//       } catch (error) {
//         setError(error.message);
//       }
//       setLoading(false);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>All Users</h1>
//       {error && <Alert variant="danger">{error}</Alert>}
//       {loading && <Alert variant="info">Loading...</Alert>}
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>ID</th>
//             <th>Email</th>
//             <th>isBlocked</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.id}</td>
//               <td>{user.email}</td>
//               <td>{user.isBlocked}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AllUser;