import Head from 'next/head'
import Link from 'next/link'
import SearchBar from './components/SearchBar'
import allUser from './allUser'
import SessionCheck from './components/sessionCheck'
import Session from './components/session'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminHeader from './components/adminHeader';
import Image from 'next/image'


const AdminDashboard = () => {
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
            <AdminHeader title="Admin Dashboard" />
            <br></br><br></br>


            <main className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/allUser" className="border border-gray-300 rounded-lg shadow p-4 flex items-center">
                    <Image src="/images/user.png" alt="All Users" className="w-10 h-10 mr-4" width={100} height={100} />
                    <div>
                        <h2 className="text-xl font-bold">All Users</h2>
                        <p className="text-gray-600">View all users</p>
                    </div>
                </Link>

                <Link href="/videos" className="border border-gray-300 rounded-lg shadow p-4 flex items-center">
                    <Image src="/images/shows.png" alt="All Shows" className="w-10 h-10 mr-4" width={100} height={100} />
                    <div>
                        <h2 className="text-xl font-bold">All Shows</h2>
                        <p className="text-gray-600">View all shows</p>
                    </div>
                </Link>

                

                <Link href="/signup" className="border border-gray-300 rounded-lg shadow p-4 flex items-center">
                    <Image src="/images/addUser.png" alt="Add User" className="w-10 h-10 mr-4" width={100} height={100} />
                    <div>
                        <h2 className="text-xl font-bold">Add User</h2>
                        <p className="text-gray-600">Add a new user</p>
                    </div>
                </Link>

                

                <Link href="/email" className="border border-gray-300 rounded-lg shadow p-4 flex items-center">
                    <Image src="/images/email.png" alt="Send Email" className="w-10 h-10 mr-4" width={100} height={100} />
                    <div>
                        <h2 className="text-xl font-bold">Send Email</h2>
                        <p className="text-gray-600">Send email to users</p>
                    </div>
                </Link>

                <Link href="/searchUser" className="border border-gray-300 rounded-lg shadow p-4 flex items-center">
                    <Image src="/images/searchUser.png" alt="Search User" className="w-10 h-10 mr-4" width={100} height={100} />
                    <div>
                        <h2 className="text-xl font-bold">Search User</h2>
                        <p className="text-gray-600">Search for a user</p>
                    </div>
                </Link>

                <Link href="/financialData" className="border border-gray-300 rounded-lg shadow p-4 flex items-center">
                    <Image src="/images/finance.png" alt="Search User" className="w-10 h-10 mr-4" width={100} height={100} />
                    <div>
                        <h2 className="text-xl font-bold">Financial Data</h2>
                        <p className="text-gray-600">Check Yearly Financial Report</p>
                    </div>
                </Link>

                <Link href="/updateUser" className="border border-gray-300 rounded-lg shadow p-4 flex items-center">
                    <Image src="/images/user.png" alt="Search User" className="w-10 h-10 mr-4" width={100} height={100} />
                    <div>
                        <h2 className="text-xl font-bold">Update User</h2>
                        <p className="text-gray-600">Update a Specific User</p>
                    </div>
                </Link>

                <Link href="/allUser" className="border border-gray-300 rounded-lg shadow p-4 flex items-center">
                    <Image src="/images/payment.png" alt="Due Payments" className="w-10 h-10 mr-4" width={100} height={100} />
                    <div>
                        <h2 className="text-xl font-bold">Due Payments</h2>
                        <p className="text-gray-600">View due payments</p>
                    </div>
                </Link>

                <Link href="/allUser" className="border border-gray-300 rounded-lg shadow p-4 flex items-center">
                    <Image src="/images/manager.png" alt="Check Manager Requests" className="w-10 h-10 mr-4" width={100} height={100} />
                    <div>
                        <h2 className="text-xl font-bold">Check Manager Requests</h2>
                        <p className="text-gray-600">Check requests from managers</p>
                    </div>
                </Link>
            </main>

        </>

    )
}

export default AdminDashboard;
