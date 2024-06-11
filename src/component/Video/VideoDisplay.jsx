import React from 'react';

const VideoDisplay = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        title="Exercise Video"
        className="w-full h-full"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default VideoDisplay;