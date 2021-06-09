import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(({ video, video: { snippet }, onSelect, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    return (
        <li className={`${styles.video} ${displayType}`} onClick={() => onSelect(video)}>
            <img src={snippet.thumbnails.medium.url} className={styles.thumbnails} alt="video thumbnails"></img>
            <div className={styles.metadata}>
                <h1 className={styles.title}>{snippet.title}</h1>
                <p className={styles.channel}>{snippet.channelTitle}</p>
            </div>
        </li>
    )
})

export default VideoItem;