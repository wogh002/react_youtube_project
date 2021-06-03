import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
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
    <VideoList videos={videos} />
  )
}

export default App;
