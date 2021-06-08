import React from 'react';
import styles from './video_detail.module.css'
const VideoDetail = ({ video ,video : {snippet} }) => (
    <section className={styles.detail}>
        <iframe
            id="ytplayer"
            type="text/html"
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameborder="0"
            allowfullscreen>
        </iframe>
        <h1>{snippet.title}</h1>
        <h2>{snippet.channelTitle}</h2>
        <pre className={styles.pre}>{snippet.description}</pre>

    </section>
)

export default VideoDetail;