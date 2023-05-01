import { useState } from 'react';
import axios from 'axios';
import AdminHeader from './components/adminHeader';
import Link from 'next/link';

export default function UpdateUserPage() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put('http://localhost:3000/admin/updateuser', {
                id: id,
                name: name,
                email: email,
            });

            if (response.status === 200) {
                // Data successfully updated
                console.log('User data updated');
            } else {
                // Handle error case
                console.log('Failed to update user data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <AdminHeader />

            <Link href="/adminDashboard" className="text-blue-500 underline mb-4 inline-block">
                Back to Admin Dashboard
            </Link>

            <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Update User</h1>
                <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto">
                    <div className="mb-4">
                        <label htmlFor="id" className="block text-left font-semibold mb-1">
                            ID:
                        </label>
                        <input
                            type="number"
                            id="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            className="w-full border border-gray-300 rounded py-2 px-4"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-left font-semibold mb-1">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded py-2 px-4"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-left font-semibold mb-1">
                            Email:
                        </label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded py-2 px-4"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-red-500 text-white font-semibold py-2 px-4 rounded"
                    >
                        Update User
                    </button>
                </form>
            </div>
        </>
    );
}
