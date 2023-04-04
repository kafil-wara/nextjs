import Head from 'next/head'
import Link from 'next/link'
import SearchBar from './components/SearchBar'
import allUser from './allUser'

export default function AdminDashboard() {
    return (
        <>
        <Head>
            <table>
                <tr>
                    <td><a href="#"><img src="images/resize.png"></img></a></td>
                    <td><a href="#">Home</a></td>
                    <td><a href="#">TV Shows</a></td>
                    <td><a href="#">Movies</a></td>
                </tr>
                <tr>
                    <td><SearchBar /> </td>
                    <td><a href="#">Subscribe</a></td>
                </tr>
            </table>
        <hr></hr>
        </Head>

        <main>
            <h2>Admin Dashboard</h2>
            <Link href="/allUser">All User</Link>
            <br></br>
            <Link href="/allUser">All Shows</Link>
        </main>
        </>

    )
}

