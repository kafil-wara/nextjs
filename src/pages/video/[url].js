import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';
import Head from 'next/head';
import { useState } from 'react';
import SessionCheck from '../components/sessionCheck';

export default function VideoPage() {
  const router = useRouter();
  const { url, title } = router.query;
  const decodedUrl = decodeURIComponent(url);
  const [email, setEmail] = useState(null);

  return (
    <>
    <SessionCheck />
    
      <Head />
      <a href="/videos">Back to all videos</a>
      <br></br>
      <br></br>
      <br></br>
      <br></br>     
      
      <div className="player-wrapper">
        <ReactPlayer url={decodedUrl} controls={true} />
      </div>
    </>
  );
}
