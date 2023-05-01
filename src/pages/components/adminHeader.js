import SearchBar from "./SearchBar"
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function AdminHeader(props) {
    return(
        <Head>
        <title>{props.title}</title>
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
    </Head>
    )

    

}