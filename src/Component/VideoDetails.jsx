import React from 'react'

const VideoDetails = ({video}) => {
    if (!video) {
    return "...loading";
  } else {
    var videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  }
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={videoSrc}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoDetails;
