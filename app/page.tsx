import Image from 'next/image';
import VideoExamp from '../components/video';
import data from '../data.json';

export default function Home() {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className='z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex'>
          <h1 className='{`mb-3 text-3xl font-bold`}'>Video App</h1>
        </div>

        <VideoExamp
          title={data[0].title}
          URL={data[0].url}
          votes={data[0].rating}
        />
      </main>
    </>
  );
}
