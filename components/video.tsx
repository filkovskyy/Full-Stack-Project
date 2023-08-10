import ReactPlayer from 'react-player';

interface VideoProps {
  title: string;
  URL: string;
  votes: number;
}

export default function VideoExamp({ title, URL, votes }: VideoProps) {
  return (
    <>
      <div className={`video-example`}>
        <h1 className={`video-title`}>{<a href={`${URL}`}>{title}</a>}</h1>
        <iframe
          width='560'
          height='315'
          src={URL}
          title='YouTube video player'
          allowFullScreen
        ></iframe>

        {/*
        
        //! <ReactPlayer></ReactPlayer>  // Not working
        
        
        */}

        <p className={`video-votes`}>{votes}</p>
      </div>
    </>
  );
}
