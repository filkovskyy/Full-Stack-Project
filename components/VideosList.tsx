'use client';
import { useState } from 'react';
import { VideoProps } from './VideoExample';
import VideoExample from './VideoExample';
import data from '../exampleresponse.json';

export default function VideosList() {
  const [videos, setVideos] = useState<VideoProps[]>(data);

  function handleDelete(id: number) {
    const updatedVideos = videos.filter((video) => video.id !== id);
    setVideos(updatedVideos);
  }

  return (
    <div className='videos-container grid grid-flow-row auto-rows-max grid-cols-2 gap-4 auto-cols-max'>
      {videos.map((video) => (
        <VideoExample
          key={video.id}
          id={video.id}
          title={video.title}
          URL={video.url}
          votes={video.rating}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
