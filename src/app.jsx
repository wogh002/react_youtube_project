import { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
function App() {
  const [videos, setVideos] = useState([]);

  const onSearch = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyCYNqNYWWu8JXtSK1I62-LbQa6oxA4WDxE&part=snippet&type=video&maxResults=25&q=${query}&key=AIzaSyCYNqNYWWu8JXtSK1I62-LbQa6oxA4WDxE`
      , requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({ ...item, id: item.id.videoId })))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyCYNqNYWWu8JXtSK1I62-LbQa6oxA4WDxE&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCYNqNYWWu8JXtSK1I62-LbQa6oxA4WDxE"
      , requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      <VideoList videos={videos} />
    </div>

  )
}

export default App;
