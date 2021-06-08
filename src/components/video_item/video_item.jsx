import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video, video: { snippet: { thumbnails, title, channelTitle } }, onSelect, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    return (
        <li className={`${styles.video} ${displayType}`} onClick={() => onSelect(video)}>
            <img src={thumbnails.medium.url} className={styles.thumbnails} alt="video thumbnails"></img>
            <div className={styles.metadata}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.channel}>{channelTitle}</p>
            </div>
        </li>
    )
}

export default VideoItem;