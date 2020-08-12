import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;  
  });
  
    return <div className="ui relaxed divided list">{renderedList}</div>;  
};

export default VideoList;

// any time this component is rendered on the screen it will have a prop called props.videos (an array of different records we want to render out as html to the screen)