import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video: { snippet : {thumbnails,title,channelTitle} } }) => {
    return (
        <li className={styles.video}>
            <a href="#" className={styles.link}>
                <img src={thumbnails.medium.url} className={styles.thumbnails} alt="video thumbnails"></img>
                <div className={styles.metadata}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.channel}>{channelTitle}</p>
                </div>
            </a>
        </li>
    )
}

export default VideoItem;