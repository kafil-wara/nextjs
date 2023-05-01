import SearchBar from "./SearchBar"
import Head from 'next/head'

export default function AdminHeader(props) {
    return(
        <Head>
        <title>{props.title}</title>
        <div className="border-b-2">
            <div className="flex justify-between items-center py-4">
                <div className="flex items-center">
                    <a href="/">
                        <img src="images/resize.png" alt="Logo" />
                    </a>
                    {/* <a href="#" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600">TV Shows</a>
                    <a href="#" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600">Movies</a> */}
                </div>
                
                <div className="text-2xl font-bold text-gray-800">
                    <a href="/adminDashboard">Admin Dashboard</a>
                </div>
                <div className="flex items-center">
                    
                </div>
            </div>
            <div className="flex flex justify-end">
                <a href="/" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600 ">Go To Main Site</a>
            </div>
        </div>
    </Head>
    )

    

}