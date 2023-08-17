'use client';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';

export interface VideoProps {
  title: string;
  URL: string;
  votes: number;
  id: number;
  onDelete: (id: number) => void;
}

function createVideoPlayer(URL: string) {
  return (
    <ReactPlayer
      url={`https://www.youtube.com/embed/${URL.split('=')[1]}`}
      controls={true}
    ></ReactPlayer>
  );
}

export default function VideoExample({
  title,
  URL,
  votes,
  id,
  onDelete,
}: VideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [rating, setRating] = useState(votes);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <>
      <div className={`video-example w-fit ${id}`}>
        <div className='video-header flex flex-row justify-between my-2'>
          <h1 className={`video-title`}>
            <p
              className={`video-title truncate w-60 hover:underline decoration-solid`}
            >
              <a
                href={`${URL}`}
                target='_blank'
              >
                {title}
              </a>
            </p>
          </h1>
          <Button
            className={`delete-button`}
            variant='outlined'
            color='error'
            startIcon={<DeleteForeverRoundedIcon />}
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </Button>
        </div>
        <div className='video-player'>
          {isLoaded ? createVideoPlayer(URL) : null}
        </div>
        <div className='video-info flex flex-row justify-between my-2'>
          <p className={`video-votes`}>Votes: {rating}</p>
          <div className='votes flex flex-row justify-between'>
            <ButtonGroup
              variant='contained'
              aria-label='outlined primary button group'
            >
              <Button
                className={`up-vote-button`}
                color='success'
                onClick={() => {
                  setRating((rating) => rating + 1);
                }}
              >
                <ThumbUpRoundedIcon className='mx-2' />
                Like
              </Button>
              <Button
                className={`down-vote-button`}
                color='error'
                onClick={() => {
                  if (rating < 1) {
                    setRating(1);
                  }
                  setRating((rating) => rating - 1);
                }}
              >
                <ThumbDownRoundedIcon className='mx-2' />
                Dislike
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </>
  );
}
