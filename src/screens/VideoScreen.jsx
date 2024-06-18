import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useGetVideoQuery, useGetCommentsQuery } from "../slices/videosApiSlice";
import { IoMdSettings } from "react-icons/io";
import { Row, Col, ListGroup} from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";

const VideoScreen = () => {
  const { id: videoId } = useParams();

  const { data, isLoading, error } = useGetVideoQuery(videoId);
  const { data: commentsData, isLoading: commentsLoading, error: commentsError } = useGetCommentsQuery(videoId);

  // Function to extract the YouTube video ID from the URL
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\/videos\/|embed\/|shorts\/|youtube.com\/clip\/|https:\/\/m.youtube.com\/watch\?v=|&clip=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
  };

  // Call getYouTubeEmbedUrl only if data is available
  const embedUrl = data && data.video.video_url ? getYouTubeEmbedUrl(data.video.video_url) : null;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { comments = [] } = commentsData || {}; //Destructuring comments

  return (
    <>
      {embedUrl ? (
        <>
        <Link to={`/editVideo/${videoId}`} className='align-items-center'>
            <IoMdSettings 
            className='align-items-center mb-2'
            size="1.5em"
            color="black"
            />
        </Link>

        <div className="video-screen-container">
          <iframe
            className="video-screen-frame"
            src={embedUrl}
            allowFullScreen
            title={data.video.title}
          ></iframe>
        </div>

        <div className="video-details-container">
            <div className="">
              <h4 className="">{data.video.title}</h4>
              <p className="">  Uploaded by {data.video.user_id}</p>
              <p className="">{data.video.description}</p>
            </div>
        </div>

        <hr></hr>

        <div>
            <p className='mb-3'>Comments</p>

            <p> <FaUserCircle /> Add a comment</p>
            {comments.length > 0 ? (
                <Row className='comment-section'>
                    <Col md={6}>
                        {comments.map((comment) => (
                            <ListGroup.Item key={comment._id}>
                                <div className="mt-2">
                                    <FaUserCircle /> @{comment.user_id}
                                    <p>{comment.content}</p>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </Col>
                </Row>
            ) : (
                <p>No comments</p>
            )}
            
        </div>
        </>
      ) : (
        <div>Invalid video URL</div>
      )}
    </>
  );
}

export default VideoScreen;
