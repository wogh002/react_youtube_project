import React from 'react';
import styles from './video_list.module.css';
import VideoItem from '../video_item/video_item';

const VideoList = ({ videos, onSelect, display }) => {
    return (
        <ul className={styles.videos}>
            {
                videos.map(video => <VideoItem key={video.id} video={video} onSelect={onSelect} display={display} />)
            }
        </ul>
    )
}
export default VideoList;