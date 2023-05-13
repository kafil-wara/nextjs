import { useState } from 'react';
import Link from 'next/link';
import Header from './components/header';
import AdminHeader from './components/adminHeader';
import Head from 'next/head';
import Image from 'next/image';


export default function VideoList() {
  const [videos, setVideos] = useState([
    {
      title: 'Thor',
      url: 'https://www.youtube.com/watch?v=JOddp-nlNvQ',
      status: 'active',
    },
    {
      title: 'Extraction 2',
      url: 'https://www.youtube.com/watch?v=mO0OuR26IZM',
      status: 'active',
    },
    {
      title: 'Oppenheimer',
      url: 'https://www.youtube.com/watch?v=bK6ldnjE3Y0',
      status: 'active',
    },
    {
      title: 'FAST X',
      url: 'https://www.youtube.com/watch?v=32RAq6JzY-w',
      status: 'active',
    },
  ]);

  const toggleStatus = (index) => {
    const updatedVideos = [...videos];
    const video = updatedVideos[index];
    video.status = video.status === 'active' ? 'blocked' : 'active';
    setVideos(updatedVideos);
  };

  return (
    <>
      <Head>
        <title>All Shows</title>
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
        <div>
          <Link href="/adminDashboard" className="text-blue-500 underline">
            Back to Admin Dashboard
          </Link>
          <h1 className="text-xl font-bold mt-4 text-center">All Videos</h1>
          <br></br>
          <br></br>
          <table className="w-full mt-4 shadow-xl">
            <thead>
              <tr className="border-b shadow-sm">
                <th className="py-2">Title</th>
                <th className="py-2">Status</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {videos.map((video, index) => (
                <tr key={index} className="border-b shadow-sm">
                  <td className="py-2 text-center">
                    <Link href={`/video/${encodeURIComponent(video.url)}`}>
                      <p className="text-blue-500 hover:underline ">{video.title}</p>
                    </Link>
                  </td>
                  <td className="py-2 text-center">{video.status}</td>
                  <td className="py-2 text-center">
                    <button
                      className={`py-1 px-4 border-2 ${video.status === 'active'
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'bg-red-500 border-red-500 text-white'
                        }`}
                      onClick={() => toggleStatus(index)}
                    >
                      {video.status === 'active' ? 'Block' : 'Unblock'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </>
      );
}
