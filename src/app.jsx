import { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectVideo] = useState(null);

  const onSelect = video => {
    setSelectVideo(video);
  }
  const search = query => {
    youtube
      .search(query)
      .then(videos => setVideos(videos))
  }
  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos))
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader search={search} />
      <section className={styles.container}>
        {
          selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo} />
            </div>
          )
        }
        <div className={styles.list}>
          <VideoList videos={videos} onSelect={onSelect} display={selectedVideo ? "list" : "grid"} />
        </div>
      </section>
    </div>
  )
}

export default App;
