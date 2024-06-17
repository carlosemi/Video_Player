import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const Video = ({video}) => {

     // Function to extract the YouTube video ID from the URL
    const getYouTubeEmbedUrl = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\/videos\/|embed\/|shorts\/|youtube.com\/clip\/|https:\/\/m.youtube.com\/watch\?v=|&clip=)([^#&?]*).*/;
        const match = url.match(regExp);

        return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
    };

  const embedUrl = getYouTubeEmbedUrl(video.video_url);

    return (
    <Card className="my-3 rounded border-0">
        <Link to={`/video/${video.id}`}>
            <div className="video-container rounded-top">
                <iframe
                    className="video-frame rounded-top"
                    src={embedUrl}
                    allowFullScreen
                    title={video.title}
                ></iframe>
            </div>
        </Link>
        <Card.Body>
            <Link to={`/video/${video.id}`} style={{ color: 'black', textDecoration: 'none' }}>
                <Card.Title as='div' className='video-title'>
                    <strong>{video.title}</strong>
                </Card.Title>
            </Link>

            <Card.Text as='div'>
                <FaUserCircle />  {video.user_id}
            </Card.Text>

            {/* <Card.Text as='h3'>
                {video.description}
            </Card.Text> */}
        </Card.Body>
    </Card>
  )
}

export default Video