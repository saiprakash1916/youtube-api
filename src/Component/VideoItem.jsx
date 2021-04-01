import React from 'react'

const VideoItem = ({ video, onSelectedVideo }) => {
  return (
    <main
      onClick={() => {
        console.log(onSelectedVideo(video));
      }}
    >
      <div className="itemBlock">
        <img src={video.snippet.thumbnails.medium.url} alt={video.name} />
      </div>
      <div>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </main>
  );
};

export default VideoItem
