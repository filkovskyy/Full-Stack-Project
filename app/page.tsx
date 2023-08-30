import VideosList from '../components/VideosList';
import AddVideo from '../components/AddVideo';

export default function Home() {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-center p-20'>
        <div className='z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex'>
          <h1 className='{`mb-3 text-3xl font-bold`}'>Video App</h1>
        </div>
        <AddVideo />
        <VideosList />
      </main>
    </>
  );
}
