import React, { Fragment, useEffect, useState } from "react";
import SearchComponent from "./Component/SearchComponent";
import VideoDetails from "./Component/VideoDetails";
import VideoList from "./Component/VideoList";
import Youtube from "./Component/Youtube";
const App = () => {
  const [videos, setVideos] = useState([]);
  const [SelectedVideo, setSelectedVideo] = useState(null);
  let onTermSubmit = async term => {
    let response = await Youtube.get("/search", {
      params: { q: term },
    });
    setVideos(response.data.items);
    onSelectedVideo(response.data.items[0]);
  };
  let onSelectedVideo = video => {
    setSelectedVideo(video);
  };
  useEffect(() => {
    onTermSubmit("Bahubali");
  }, []);
  return (
    <Fragment>
      <section>
        <header>
          <SearchComponent onTermSubmit={onTermSubmit} />
        </header>
        <main className="container">
          <div className="row">
            <div className="col-md-8">
              <VideoDetails video={SelectedVideo} />
            </div>
            <div className="col-md-4">
              <VideoList videos={videos} onSelectedVideo={onSelectedVideo} />
            </div>
          </div>
        </main>
      </section>
    </Fragment>
  );
};

export default App;
