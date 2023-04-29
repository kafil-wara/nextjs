import Head from 'next/head'
import Link from 'next/link'
import SearchBar from './components/SearchBar'
import allUser from './allUser'
import SessionCheck from './components/sessionCheck'
import Session from './components/session'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function AdminDashboard() {
    const [email, setEmail] = useState(null);
    const router = useRouter();
    useEffect(() => {
        const session = sessionStorage.getItem('email');
        setEmail(session);
        if (session == null) {
            router.push('/login');
        }
    }, []);

    return (
        <>
        <SessionCheck />
        <Head>
            <title>Admin Dashboard</title>
            <table>
                <tr>
                    <td><a href="/"><img src="images/resize.png"></img></a></td>
                    <td><a href="/">Home</a></td>
                    <td><a href="#">TV Shows</a></td>
                    <td><a href="#">Movies</a></td>
                    {email==null ? <td><a href="/logout">Logout</a></td> : <td><a href="/login">Login</a></td>}
                </tr>
                <tr>
                    <td><SearchBar /> </td>
                    
                </tr>
            </table>
        <hr></hr>
        </Head>

        <main>
            <h2>Admin Dashboard</h2>
            <Link href="/allUser">All User</Link>
            <br></br>
            <br></br>
            <Link href="/videos">All Shows</Link>
            <br></br>
            <br></br>
            <Link href="/allUser">Check Manager Requests</Link>
            <br></br>
            <br></br>
            <Link href="/signup">Add User</Link>
            <br></br>
            <br></br>
            <Link href="/allUser">Due Payments</Link>
            <br></br>
            <br></br>
            <Link href="/email">Send Email</Link>
            <br></br>
            <br></br>
            <Link href="/searchUser">Search User</Link>
        </main>
        </>

    )
}

