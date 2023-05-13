import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';
import Head from 'next/head';
import { useState } from 'react';
import SessionCheck from '../components/sessionCheck';
import AdminHeader from '../components/adminHeader';
import Link from 'next/link';
import Image from 'next/image';

export default function VideoPage() {
  const router = useRouter();
  const { url, title } = router.query;
  const decodedUrl = decodeURIComponent(url);
  const [email, setEmail] = useState(null);

  return (
    <>
      
      <Head>
        <title>Watch</title>
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
      <div className="container mx-auto px-4">
        <Link href="/videos" className="text-blue-500 underline mb-4 inline-block">
          Back to all videos
        </Link>
      </div>

      <div className="flex justify-center">
        <div className=" flex justify-center">
          <ReactPlayer url={decodedUrl} controls={true} className="mx-auto" />
        </div>
      </div>
      </div>
    </>
  );
}
