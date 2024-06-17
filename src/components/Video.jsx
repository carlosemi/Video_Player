import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Video = ({video}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    console.log("Video video: " + video)

     // Function to extract the YouTube video ID from the URL
    const getYouTubeEmbedUrl = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\/videos\/|embed\/|shorts\/|youtube.com\/clip\/|https:\/\/m.youtube.com\/watch\?v=|&clip=)([^#&?]*).*/;
        const match = url.match(regExp);

        return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
    };

  const embedUrl = getYouTubeEmbedUrl(video.video_url);

    return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/videos/single/${video.video_url}`}>
            <div className="embed-responsive embed-responsive-16by9 mb-3">
                <iframe
                    className="embed-responsive-item"
                    src={embedUrl}
                    allowFullScreen
                    title={video.title}
                ></iframe>
            </div>
        </Link>
        <Card.Body>
            <Link to={`/product/${video.video_url}`}>
                <Card.Title as='div' className='product-title'>
                    <strong>{video.title}</strong>
                </Card.Title>
            </Link>

            <Card.Text as='div'>
                {video.user_id}
            </Card.Text>


            <Card.Text as='h3'>
                {video.description}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Video