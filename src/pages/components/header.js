import Head from 'next/head'
import SearchBar from './SearchBar'
import Link from 'next/link'

export default function Header(props) {
    return (
        <>
            <Head>

                <div className='border-b-2 bg-slate-100'>
                    <title>{props.title}</title>
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <a href="/">
                                <img src="images/resize.png" alt="Logo" />
                            </a>
                            <a href="/" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600">Home</a>
                            <a href="#" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600">TV Shows</a>
                            <a href="#" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600">Movies</a>
                        </div>
                        <div className="flex items-center">
                            <SearchBar />
                            <a href="signup" className="ml-4 px-4 py-2 rounded-full bg-red-500 text-white text-lg font-bold hover:bg-red-600">Subscribe</a>
                            <a href='login' className="ml-4 px-4 py-2 rounded-full bg-red-500 text-white text-lg font-bold hover:bg-red-600">Login</a>
                        </div>
                    </div>
                </div>





            </Head>
        </>
    )
}
