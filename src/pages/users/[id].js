import AdminHeader from "../components/adminHeader";
import Header from "../components/header";
import UserLayout from "../components/userLayout";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";


export default function UserProfile({ data }) {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>All User</title>
            </Head>
            <div className="bg-gray-100 min-h-screen">
                <div className="border-b-2 shadow-xl">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <Link href="/">
                                <Image src="/images/resize.png" alt="Logo" height={200} width={200} />
                            </Link>
                            {/* <a href="#" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600">TV Shows</a>
                    <a href="#" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600">Movies</a> */}
                        </div>

                        <div className="text-2xl font-bold text-gray-800">
                            <Link href="/adminDashboard">Admin Dashboard</Link>
                        </div>
                        <div className="flex items-center">

                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Link href="/" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600 ">Go To Main Site</Link>
                    </div>
                </div>
                <UserLayout user={data} />
            </div>

        </>

    )

}

export async function getServerSideProps(context) {
    const id = context.params.id;
    const response = await axios.get(`https://nestjs-production-8281.up.railway.app/admin/finduser/${id}`);
    const data = await response.data;
    return { props: { data } }
}