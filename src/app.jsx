import { useEffect, useState, useCallback } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  //useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해줍니다
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectVideo] = useState(null);

  const onSelect = useCallback(video => {
    setSelectVideo(video);
  }, []);

  const search = useCallback(query => {
    setSelectVideo(null);
    youtube
      .search(query)
      .then(videos => {
        setVideos(videos);
      })
  },[youtube]);

  // useEffect Hook을 이용하여 
  //우리는 리액트에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는 지를 말합니다. 
  //youtube 가 바뀔 때마다 effect 호출.
  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, [youtube]);

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
          <VideoList
            videos={videos}
            onSelect={onSelect}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  )
}

export default App;
