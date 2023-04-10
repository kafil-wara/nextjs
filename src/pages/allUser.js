import Head from 'next/head';
import axios from 'axios';
import Header from './components/header';
import Link from 'next/link';

export default function GetUser({ users }) {
  return (
    <div>
      <Header/>
      <a href="/adminDashboard">Back to Admin Dashboard</a>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={"/users/" + user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:3000/admin/alluser');
  const users = await response.data;
  return { props: { users } }
}

