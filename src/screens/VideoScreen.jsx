import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useGetVideoQuery, useGetCommentsQuery } from "../slices/videosApiSlice";
import { HiDotsVertical } from "react-icons/hi";
import { Row, Col, ListGroup, Form, Button} from 'react-bootstrap';
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
        <div className="video-container">
          <Row>
            <Col className="d-flex justify-content-end mb-2">
              <Link to={`/editVideo/${videoId}`}>
                <HiDotsVertical size="1.5em" color="black" />
              </Link>
            </Col>
          </Row>

          <div className="video-frame-container">
            <iframe
              className="video-frame"
              src={embedUrl}
              allowFullScreen
              title={data.video.title}
            ></iframe>
          </div>

          <div className="video-details-container">
            <h4 className="video-title">{data.video.title}</h4>
            <p className="video-user">Uploaded by {data.video.user_id}</p>
            <p className="video-description">{data.video.description}</p>
          </div>

          <hr />

          <div className="comment-section">
            <h5>Comments</h5>
            <div className="mb-3 d-flex align-items-center">
              <FaUserCircle size="2.5em" />
              <Form.Control
                as="textarea"
                placeholder="Add a comment"
                className="comment-form"
              />
              <Button variant="primary" className="ml-2">
                Comment
              </Button>
            </div>

            {comments.length > 0 ? (
              <ListGroup>
                {comments.map((comment) => (
                  <ListGroup.Item key={comment._id} className="comment-item">
                    <div className="d-flex align-items-center">
                      <FaUserCircle size="2em" className="comment-icon" />
                      <div>
                        <p className="comment-content"><strong>@{comment.user_id}</strong></p>
                        <p>{comment.content}</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <p>No comments</p>
            )}
          </div>
        </div>
      ) : (
        <div>Invalid video URL</div>
      )}
    </>
  );
}

export default VideoScreen;
