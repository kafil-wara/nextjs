import Link from 'next/link';
import Header from './components/header';

export default function VideoList() {
  const videos = [
    {
      title: 'Thor',
      url: 'https://www.youtube.com/watch?v=JOddp-nlNvQ',
    },
    {
      title: 'Extraction 2',
      url: 'https://www.youtube.com/watch?v=mO0OuR26IZM',
    },
    {
      title: 'Oppenheimer',
      url: 'https://www.youtube.com/watch?v=bK6ldnjE3Y0',
    },
    {
      title: 'FAST X',
      url: 'https://www.youtube.com/watch?v=32RAq6JzY-w',
    },
  ];

  return (
    <>
    <Header title="Video List"/>
    <div>
        <a href = "/adminDashboard">Back to Admin Dashboard</a>
      <h1>All Videos</h1>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            <Link href={`/video/${encodeURIComponent(video.url)}`}>
              <p>{video.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
