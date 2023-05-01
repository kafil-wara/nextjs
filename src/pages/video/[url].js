import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';
import Head from 'next/head';
import { useState } from 'react';
import SessionCheck from '../components/sessionCheck';
import AdminHeader from '../components/adminHeader';

export default function VideoPage() {
  const router = useRouter();
  const { url, title } = router.query;
  const decodedUrl = decodeURIComponent(url);
  const [email, setEmail] = useState(null);

  return (
    <>
      <SessionCheck />
      <AdminHeader title="Video Page" />

      <div className="container mx-auto px-4">
        <a href="/videos" className="text-blue-500 underline mb-4 inline-block">
          Back to all videos
        </a>
      </div>

      <div className="flex justify-center">
        <div className=" flex justify-center">
          <ReactPlayer url={decodedUrl} controls={true} className="mx-auto" />
        </div>
      </div>
    </>
  );
}
